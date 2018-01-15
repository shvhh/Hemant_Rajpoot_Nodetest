const fs = require('fs');
const parse = {
  numberObj: {
    '   |  |': 1,
    '_ _||_ ': 2,
    '_ _| _|': 3,
    ' |_|  |': 4,
    '_|_  _|': 5,
    '_|_ |_|': 6,
    '_  |  |': 7,
    '_|_||_|': 8,
    '_|_| _|': 9,
    '_| ||_|': 0
  },

  parseFile(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) return reject(err);
        parse.parseData(data).then(data => {
          fs.truncate(filePath, 0, function() {
            fs.writeFile(filePath, data, function(err) {
              if (err) {
                return reject('Error writing file: ' + err);
              } else resolve(filePath.slice(filePath.lastIndexOf('/')));
            });
          });
        });
      });
    });
  },

  parseData(file) {
    let number = 'all unrecognised number are show as "?"\n';
    for (let i = 0; i != 1; i = file.indexOf('\n\n', i) + 2) {
      number += parse.parseLine(file, i) + '\n';
    }
    return Promise.resolve(number);
  },

  parseLine(file, i) {
    let l = file.indexOf('\n', i);
    let number = '';
    let perLineSpace = l - i;
    for (; i < l; i = i + 3) number += this.parseDigit(file, i, perLineSpace);

    return number.replace(/undefined/g, '?');
  },
  parseDigit(file, i, perLineSpace) {
    return this.numberObj[
      file[i + 1] +
        file[i + perLineSpace + 1] +
        file[i + perLineSpace + 2] +
        file[i + perLineSpace + 3] +
        file[i + 2 * perLineSpace + 2] +
        file[i + 2 * perLineSpace + 3] +
        file[i + 2 * perLineSpace + 4]
    ];
  }
};

module.exports = parse.parseFile;

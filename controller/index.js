const parsenumber = require('../util/parseNumber');
const path = require('path');
const marcopolo = require('../util/marcoPolo');

//const forked = fork('./util/marcopolo.js');
module.exports = {
  homePage(req, res) {
    res.render('index');
  },
  marcoPolo(req, res) {
    res.end(marcopolo);
  },
  parseNumberPage(req, res) {
    res.render('parseNumber');
  },
  parsingNumber(req, res) {
    parsenumber(path.resolve(__dirname, '../' + req.files[0].path))
      .then(file =>
        res.sendFile(path.resolve(__dirname, '../' + req.files[0].path))
      )
      .catch(console.log);
  }
};

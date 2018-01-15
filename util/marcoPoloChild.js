/* module.exports = marcoPolo = (limit = 1000000, str = '', i = 0) => {
  if (i >= limit) return Promise.resolve(str);
  for (j = 0; j < 1000; j++) {
    i++;
    let flag = true;
    if (i % 4 == 0) {
      str += 'marco';
      flag = false;
    }
    if (i % 7 == 0) {
      str += 'polo';
      flag = false;
    }

    if (flag) {
      str += i;
    }
    str += ',';
  }

  return Promise.resolve(marcoPolo(limit, str, i++));
};
 */
/* process.on('marcopolo', msg => {
  let str = marcoPoloGenerator(msg);
  process.send(str);
}); */
function marcoPoloGenerator(limit = 1000000) {
  let str = '';
  for (let i = 1; i < limit; i++) {
    let flag = true;
    if (i % 4 == 0) {
      str += 'marco';
      flag = false;
    }
    if (i % 7 == 0) {
      str += 'polo';
      flag = false;
    }

    if (flag) {
      str += i;
    }
    str += ',';
  }
  return str;
}
let str = marcoPoloGenerator();
console.log(str);

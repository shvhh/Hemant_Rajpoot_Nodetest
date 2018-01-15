const app = require('express')();
const upload = require('../util/upload');
const {
  homePage,
  marcoPolo,
  parseNumberPage,
  parsingNumber
} = require('../controller/');
app.get('/marcopolo', marcoPolo);
app.get('/parsenumber', parseNumberPage);
app.post('/parsenumber', upload.any(), parsingNumber);
app.get('/', homePage);
module.exports = app;

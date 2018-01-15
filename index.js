const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const routes = require('./routes/');
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors());
app.use('/', routes);

module.exports = app;

const express = require('express');
const app = express();
 

var config = require('./config');
var routes = require('./router');
//var morgan = require('morgan');
//var morganext = require('mongo-morgan-ext');
var mongoose = require('mongoose');
app.use(express.urlencoded({extended: false}));
 
const logRequestStart = (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl}`) 

  res.on('finish', () => {
      console.info(`${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`)
  })

  next()
}

app.use(logRequestStart)

mongoose.connect(config.mongo.url);
routes.register(app);

app.listen(3000, () => {
  console.log('Server running on localhost:3000');
});

module.exports = app;
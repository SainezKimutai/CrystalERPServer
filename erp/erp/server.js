const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true});
const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io');
const io = socketIO.listen(server);
 

var config = require('./config');
var routes = require('./router');
//var morgan = require('morgan');
//var morganext = require('mongo-morgan-ext');
var mongoose = require('mongoose');
app.use(express.urlencoded({extended: false}));

//cors
app.use(cors());

// Bordy parser
app.use(bodyParser.json());
app.use(urlencodedParser);
 
const logRequestStart = (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl}`) 

  res.on('finish', () => {
      console.info(`${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`)
  })

  next()
}

app.use(logRequestStart)

// Connecting to database
mongoose.connect(config.mongo.url, { useNewUrlParser: true, useCreateIndex: true });


routes.register(app);

// import Emit
let Emit = require('./api/emit/emit.controller.js');
Emit(app, io)

//Socket Connection
io.on('connection', function(){});

// Listening to aport
server.listen(3000, () => {
  console.log('Server running on localhost:3000');
});

module.exports = app;
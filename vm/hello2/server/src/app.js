const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const mongo = require('mongodb')
const mongoose = require('mongoose')
const promise = require('bluebird')
const message = require('./routes/message')

const url = "mongodb://admin:justasbad@localhost:27017/"

mongoose.connect(url, { useNewUrlParser: true, promiseLibrary: promise })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

/*

const MongoClient = mongo.MongoClient

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("hellodb");
    var myobj = { "lang" : "ru", "message": "Привет" };
    dbo.collection("messages").insertOne(myobj, function(err, res) {
	if (err) throw err;
	console.log("1 document inserted");
	db.close();
    });
});
*/

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended':'false'}))
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/messages', express.static(path.join(__dirname, 'dist')))
app.use('/message', message)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(cors())
app.set('port', process.env.PORT || 3000);
app.listen(process.env.PORT || 3000)

app.on('error', onError);
app.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = app.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

module.exports = app;

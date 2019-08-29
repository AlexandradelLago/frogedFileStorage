const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// controllers
const fileController = require('./routes/file');

// connecting to the database
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/file-storage", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB!!!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  })


const cors = require('cors');

const app = express();

const corsOptions = {
  origin: true,
  credentials: true
}

app.use(cors(corsOptions));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/file', fileController)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  return res.status(500).send({ message: err.message, stack: err.stack })
});



module.exports = app;

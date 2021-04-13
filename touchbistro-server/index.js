var express = require('express');
var cookieParser = require('cookie-parser');
var primeNumberRoute = require('./../touchbistro-server/routes/primeNumberRoute');
var app = express();
var cors = require('cors')

//Adding Cors to server
app.use(cors());

const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', primeNumberRoute);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

module.exports = app;

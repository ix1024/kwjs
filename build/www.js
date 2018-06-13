'use strict';

var http = require('http');
var app = http.createServer(function (req, res, next) {});
app.listen(2018);

var kw = require('./kw.js');
console.log(kw);
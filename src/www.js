var http = require('http');
var app = http.createServer(function (req, res, next) {

});
app.listen(2018);

var kw = require('./kw.js');
kw.colorLog.success(kw.date().toDateTimeString(), true);
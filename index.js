var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var port = process.env.PORT || 8080; 

app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(port, function () {
   console.log("[EX] Serving at :" + port);
});


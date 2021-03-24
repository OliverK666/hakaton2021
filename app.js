var express = require("express");
var serveStatic = require("serve-static");

var app = express()
    .use(serveStatic(__dirname + "/front"))
    .listen(3000);
console.log("Server is listening on port 3000");
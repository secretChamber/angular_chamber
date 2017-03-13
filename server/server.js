var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

//app.get('/api/issue', function(req, res) {
  
// });

//app.post('/api/issue', function(req, res) {
  
// });

app.listen(PORT, function () {
  console.log('server connected on port ', PORT);
});

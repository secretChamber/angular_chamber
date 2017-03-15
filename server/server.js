var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')))


var mysql = require('mysql');

var connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'naberle'
});

connection.connect();


// =======> WORKS <=========
app.post('/postIssue', function(req, res) {

 let issue = req.body;
 
 let row = {
    user_id: 0, 
    lat: issue.location.lat,
    lng: issue.location.lng,
    type: issue.issue,
    status: issue.status,
 };

  connection.query('INSERT INTO reported_issues SET ?', row, function (err, result) {
   if (err) console.log(err);
   console.log(result);
  });

});


// =======> does this look right??? <=========
// app.get('/allIssues', function(req, res) {
//  connection.query('SELECT * FROM reported_issues', function(err, result) {
//    if (err) console.log(err);
//    console.log(result);
//  });
//     res.send(data) is this the same with react and angular??
// });

app.listen(PORT, () => {
  console.log('App is listening on PORT:', PORT);
});
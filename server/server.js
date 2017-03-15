var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8000;

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


// =======> POSTS WORK <=========
app.post('/Issue', function(req, res) {
 let issue = req.body;
 let row = {
    user_id: 0, 
    lat: issue.location.lat,
    lng: issue.location.lng,
    type: issue.issue,
    status: issue.status
 };
  connection.query('INSERT INTO reported_issues SET ?', row, function (err, result) {
   if (err) console.log(err);
   console.log(result);
  });
});

app.post('/User', function(req, res) {
  let user = req.body;
  let row = {
    username: user.username, 
    password: user.password
 };
  connection.query('INSERT INTO users SET ?', row, function (err, result) {
   if (err) console.log(err);
   console.log(result);
  });
});

app.post('/Vote', function(req, res) {
 let vote = req.body;
 let row = {
  rep_issue_id: vote.issueID,
  user_id: vote.userID
 };
  connection.query('INSERT INTO votes SET ?', row, function (err, result) {
   if (err) console.log(err);
   console.log(result);
  });
});

// =======> GETS under development <=========
app.get('/allIssues', function (req, res) {
  connection.query('SELECT * FROM reported_issues', function(err, result) {
    if (err) console.log(err);
    console.log(result);
    res.send(result);
  });
});

app.get('/numOfVotes', function (req, res) {
  let id = req.query.id;
  connection.query('SELECT COUNT (*) FROM votes WHERE rep_issue_id = ' + id, function(err, result) {
    if (err) console.log(err);
    console.log(result);
    res.send(result);
  });
});
// =======> end of GETS <=======

app.listen(PORT, function () {
  console.log('App is listening on PORT:', PORT);
});




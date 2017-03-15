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


// =======> POSTS SHOULD WORK <=========
app.post('/postIssue', function(req, res) {
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

app.post('/postUser', function(req, res) {
  let user = req.body;
  let row = {
    username: 'test_name', 
    password: 'test_password'
 };
  connection.query('INSERT INTO users SET ?', row, function (err, result) {
   if (err) console.log(err);
   console.log(result);
  });
});

app.post('/postVote', function(req, res) {
 let vote = req.body;
 let row = {
  rep_issue_id: vote.rep_issue_id,
  user_id: vote.user_id
 };
  connection.query('INSERT INTO votes SET ?', row, function (err, result) {
   if (err) console.log(err);
   console.log(result);
  });
});

// =======> GETS under development <=========
app.get('/allIssues', function(req, res) {
 connection.query('SELECT * FROM reported_issues', function(err, result) {
   if (err) console.log(err);
   console.log(result);
 });
    res.send(data);
});

// ---> i dont think this is MVP <---
// app.get('/allUsers', (req,res) => {
//  connection.query('SELECT username FROM users', function(err, result) {
//    if (err) console.log(err);
//    console.log(result);
//  });
//     res.send(data);
// });

app.get('/getVoteNumber', (req,res) => {
 let id = req.body;
 connection.query('SELECT COUNT (*) FROM votes WEHRE rep_issue_id = ' + id.rep_issue_id, function(err, result) {
   if (err) console.log(err);
   console.log(result);
 });
    res.send(data);
});
// =======> end of GETS <=======

app.listen(PORT, () => {
  console.log('App is listening on PORT:', PORT);
});




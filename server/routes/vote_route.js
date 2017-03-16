var express = require('express');
var router = express.Router();
var connection = require('../database');

router.post('/', function(req, res) {
 let vote = req.body;
 let row = {
  rep_issue_id: vote.issueID,
  user_id: vote.userID
 };
  connection.query('INSERT INTO votes SET ?', row, function (err, result) {
   if (err) console.log(err);
   console.log(result);
   res.sendStatus(201).end();
  });
});

router.get('/count', function (req, res) {
  let id = req.query.id;
  connection.query('SELECT COUNT (*) FROM votes WHERE rep_issue_id = ' + id, function(err, result) {
    if (err) console.log(err);
    console.log(result);
    res.send(result);
  });
});

module.exports = router;

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'naberle'
  }
});

var bookshelf = require('bookshelf')(knex);
var db = bookshelf;
module.exports.db = db;
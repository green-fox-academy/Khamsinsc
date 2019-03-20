'use strict';

const mysql = require('mysql');
let connection = null;

try {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'quiz',
    multipleStatements: true
  });
  console.log(`Database connection to Database quiz was successful`);
} catch (e) {
  console.log(`Database connection to Database quiz has failed`);
  console.error(e);
}

module.exports = { connection };

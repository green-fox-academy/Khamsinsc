'use strict';
const express = require('express');
const mysql = require('mysql');
const app = express();

let connection = mysql.createConnection({
  host: 'localhost',
  port: 8080,
  user: 'root',
  password: 'password',
  database: 'articles'
});

app.listen(8080);
connection.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});

global.connection = connection;

'use strict';

const mysql = require('myspl');

let connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'articles'
});

connection.connect();

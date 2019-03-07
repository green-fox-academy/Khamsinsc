'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password'
})

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to DB');
    return;
  }
  console.log('DB is connected');
})

conn.end();

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});


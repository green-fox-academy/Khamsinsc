'use strict';
/* require('dotenv').config(); */
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mysql',
})

 conn.connect((err) => {
  if (err) {
    console.log('Error connecting to DB');
    return;
  }
  console.log('DB is connected');
})

app.get('/', (req, res) => {
  conn.query('SELECT * FROM db;', (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
    console.log(rows);
  })
  conn.end(); 
})

app.post('/newtask', (req,res)=>{
  conn.query(`INSERT INTO tasks (title,done) VALUES
  ()`)
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});


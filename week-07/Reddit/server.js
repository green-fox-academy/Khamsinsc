'use strcit';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const mysql = require('mysql');
const fs = require('fs');
let postFile = JSON.parse(fs.readFileSync('./assets/posts.json', 'utf-8'));
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit'
})

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/hello', (req, res) => {
  res.send(`Hello world!`);
})

app.get('/posts', (req, res) => {
  connection.query(`SELECT * FROM posts`, (err, result) => {
    err ? console.log(err) : res.send(result);
  })
})


app.post('/posts'), (req, res) => {
  console.log(req);
  res.send(`req`);
  /* postFile.posts.forEach(post => {
    connection.query(`SELECT * FROM posts`, (err, result) => {
      err ? console.log(err) : console.log(result);
    })
  }); */
}


app.listen(PORT, () => {
  console.log(`listening PORT ${PORT}`);
})
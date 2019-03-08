'use strcit';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const mysql = require('mysql');
const fs = require('fs');
let postFile = JSON.parse(fs.readFileSync('./assets/posts.json', 'utf-8'));
console.log(postFile.posts[0]);

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit'
})

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/hello', (req, res) => {
  res.send(`Hello World!`);
})


app.get('/posts', (req, res) => {
  postFile.posts.forEach(post => {
    connection.query(`insert into reddit set ?`, post, (err, result) => {

    })
  });
  res.sendFile(path.join(__dirname, '/assets/posts.json'));
})









app.listen(PORT, () => {
  console.log(`listening PORT ${PORT}`);
})
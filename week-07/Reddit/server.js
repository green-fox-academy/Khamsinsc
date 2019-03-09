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
    err ? console.log(err) : res.status(200).json({
      "posts": result
    });
  })
})

app.post('/posts', (req, res) => {
  if ('username' in req.headers === true && req.headers["content-type"] === 'application/json') {
    let userNameQuery = ` \`owner\` = ${req.headers.username},`
    connection.query(`INSERT INTO posts SET ${userNameQuery} ?`, req.body, (err, insertResult) => {
      if (err) {
        console.error(err);
        return;
      } else {
        connection.query(`select * FROM posts where id = LAST_INSERT_ID()`, (err, result) => {
          if (err) {
            console.error(err);
            return;
          } res.json(result);
        })
      }
    })
  }
})

app.put('/posts/:id/:vote', (req, res) => {
  if (req.headers["content-type"] === 'application/json' && 'vote' in req.params) {
    connection.query(`update posts set vote = vote ${req.params.vote === 'upvote' ? '+1' : req.params.vote === 'downvote' ? '-1' : ' '} where id = ${req.params.id}`, (err, result) => {
      if (err) {
        console.error(err);
        return;
      } else {
        connection.query(`select * FROM posts where id = ${req.params.id}`, (err, result) => {
          if (err) {
            console.error(err);
            return;
          } res.json(result);
        })
      }
    })
  }
})

app.delete('/posts/:id', (req, res) => {
  if ('username' in req.headers === true && req.headers["content-type"] === 'application/json') {
    let userNameQuery = ` \`owner\` = ${req.headers.username}`
    connection.query(`select * FROM posts WHERE id = ${req.params.id} AND ${userNameQuery}`, (err, selectResult) => {
      if (err) {
        console.error(err);
        return;
      } let savedResult = selectResult;
      connection.query(`DELETE FROM posts WHERE id = ${req.params.id} AND ${userNameQuery}`, (err, Result) => {
        if (err) {
          console.error(err);
          return;
        } else {
          res.json(savedResult);
        }
      })
    })
  }
})

app.listen(PORT, () => {
  console.log(`listening PORT ${PORT}`);
})
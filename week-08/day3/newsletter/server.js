'use strcit';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use(express.json());

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/hello', (req, res) => {
  res.send(`Hello world!`);
})

app.get('/posts', (req, res) => {

})

app.post('/posts', (req, res) => {

  res.json(req.body);

})


app.listen(PORT, () => {

})
'use strcit';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use(express.urlencoded());
app.use(express.json());
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/newsletter.html'));
})

app.post('/signup', (req, res) => {
  res.end(`
    <h1>Thanks ${req.body.username}, we will send updates to ${req.body.email}</h1> 
    `);
})

app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
})
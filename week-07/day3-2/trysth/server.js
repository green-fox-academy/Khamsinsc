'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use('/data', express.static('data'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'try.html'));
})

app.get('/:people', (req, res) => {
  
})






app.listen(PORT);
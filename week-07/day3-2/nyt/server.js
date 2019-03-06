'use strict';
const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.static('static'));

app.get('/',(req,res)=>{  
  res.sendFile(path.join(__dirname + '/nyt.html'));
})

app.listen(PORT);
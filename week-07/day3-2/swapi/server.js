'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
app.use('/static',express.static('static'));

app.get('/',(req,res)=>{  
  res.sendFile(path.join(__dirname + '/swapi.html'));
})

app.listen(PORT);
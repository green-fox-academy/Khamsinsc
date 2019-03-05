'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.json());

app.post('/arrays', (req, res) => {
  let result;
  switch (req.body.what) {
    case 'sum':
      result = req.body.numbers.reduce((acc, element) => {
        return acc + element;
      }, 0);
      break;

    case 'multiply':
      result = req.body.numbers.reduce((acc, element) => {
        return acc * element;
      }, 1);
      break;

    case 'double':
      result = [];
      req.body.numbers.forEach((element, index) => {
        result[index] = element * 2;
      });
      break;

    default:
      result = 'Please provide what to do with the numbers! if in';
      break;
  }
  
  res.json({'result': result});
})

app.listen(PORT);
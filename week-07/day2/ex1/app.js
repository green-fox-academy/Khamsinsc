'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
app.use(express.json());



const sumUntil = (inputNumber) => {
  if (inputNumber <= 1) {
    return 1;
  } else {
    return inputNumber + sumUntil(inputNumber - 1);
  }
}

const factorUntil = (inputNumber) => {
  if (inputNumber <= 1) {
    return 1;
  } else {
    return inputNumber * factorUntil(inputNumber - 1);
  }
}

app.use('/assets', express.static('assets'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  'input' in req.query ?
    res.json({
      received: parseInt(req.query.input),
      result: parseInt(req.query.input) * 2
    }) :
    res.json({
      error: 'Please provide an input!'
    });
})

app.get('/greeter', (req, res) => {
  ('name' in req.query && 'title' in req.query) ?
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    }) : 'title' in req.query ?
      res.json({
        error: 'Please provide a name!'
      }) : 'name' in req.query ? res.json({
        error: 'Please provide a title!'
      }) : res.json({
        error: 'Please provide a name and a title!'
      });
})

app.get('/appenda/:appendable', (req, res) => {
  'appendable' in req.params ?
    res.json({
      appended: req.params.appendable + 'a'
    }) : res.status(404).send('not found');
})

app.post('/dountil/:action', (req, res) => {
  let result = 0;
  console.log(req.params.action);
  console.log(req.body);
  switch (req.params.action) {
    case 'sum':
      result = sumUntil(parseInt(req.body.until));
      break;

    case 'factor':
      result = factorUntil(parseInt(req.body.until));
      break;

    default:
      result = 'Please provide a number!';
      break;
  }

  res.json({
    'result': result
  });
})


app.listen(PORT);


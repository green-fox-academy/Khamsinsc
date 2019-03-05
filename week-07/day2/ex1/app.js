'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use('/assets', express.static('assets'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  /* res.writeHead(200, { 'Content-Type': 'application/json' }); */
  'input' in req.query ?
    res.json({
      received: parseInt(req.query.input),
      result: parseInt(req.query.input) * 2
    }) :
    res.json({
      error: 'Please provide an input!'
    });
  /* res.end(data); */
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


app.listen(PORT);

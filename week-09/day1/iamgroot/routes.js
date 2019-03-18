'use strict';

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  if ('message' in req.query === false) {
    res.status(500).json({
      'error': 'I am Groot!'
    });
    return;
  } else {
    let reqMsg = req.query.message;
    res.json({
      'received': reqMsg,
      'translated': 'I am Groot!'
    });
  }
});

module.exports = app;
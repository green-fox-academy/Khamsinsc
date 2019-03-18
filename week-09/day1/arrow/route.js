'use strict';

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  if ('distance' in req.query === true && 'time' in req.query === true) {
    let distance = parseFloat(req.query.distance);
    let time = parseFloat(req.query.time);
    res.json({
      "distance": distance,
      "time": time,
      "speed": distance / time
    });
  } else {
    res.status(500).send('Please provide valid parameters for calculation');
    return;
  }
});

module.exports = app;
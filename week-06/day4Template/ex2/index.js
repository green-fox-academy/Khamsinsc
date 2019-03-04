'use strict';
const express = require('express');
const app = express();
const PORT = 3070;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  res.render('home', {
    title: 'Greetings',
    body: `Welcome back, ${req.query.name == undefined?'Guest': req.query.name}!`
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
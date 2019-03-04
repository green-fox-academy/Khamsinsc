const express = require('express');
const app = express();
const PORT = 3080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  res.render('home', {
    title: 'Let me try this',
    body: '🌍 Hello World application is up and running. 🎉 We are done. Nice work! 🎉'
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
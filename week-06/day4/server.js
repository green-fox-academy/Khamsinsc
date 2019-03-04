'use strcit';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use('/assets', express.static('assets'));

app.listen(PORT, () => {
  console.log(`see if this works on PORT ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})


'use strict';
const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.json());


let transformString = (inputText) => {
  let splitted = [];
  let reversed = [];
  inputText.slice(0, -1).split('. ').forEach((e, i) => {
    splitted[i] = e.split(' ');
  });

  splitted.forEach((e, i) => {
    reversed[i] = [];
    e.forEach((ee, ii) => {
      if ((ii + 1) % 2 === 1) {
        reversed[i][ii] = ee;
      } else {
        reversed[i][ii] = reversed[i][ii - 1];
        reversed[i][ii - 1] = ee;
      }
    })
  })

  const twoOrThree = () => {
    const randomString = ['arrgh', 'uhmm', 'hmm', 'err', 'grr', 'muhahaha'];
    let pushThisString = '';
    let twoOrThree = Math.floor(Math.random() * 2) + 1;

    while (twoOrThree > 0) {
      twoOrThree--;
      pushThisString = pushThisString.concat(`..${randomString[Math.floor(Math.random() * 6)]}`);
    }
    return pushThisString;
  }

  let newTexts = [];
  reversed.forEach((e, i) => {
    newTexts[i] = e.join('')[0].toUpperCase() + e.join(' ').slice(1).toLowerCase() + '.';
  });
  newTexts.map((e, i) => { newTexts[i] = e.concat(`${twoOrThree()}`); });

  return newTexts.join('. ') + '.';
}

app.post('/sith', (req, res) => {
  let originalText = req.body.text;
  let response;
  if ('text' in req.body) {
    response = transformString(originalText);
  } else {
    response = {
      "error": "Feed me some text you have to, padawan young you are. Hmmm."
    }
  }

  res.json({
    'sith_text': response
  });
})

app.listen(PORT);
'use strict';

let originalText = 'This is my example sentence. Just for fun.';
export const transformString = (inputText) => {
  let splitted: string[][] = [];
  let reversed: string[][] = [];
  inputText.slice(0, -1).split('. ').forEach((e, i) => {
    splitted[i] = e.split(' ');
  });

  console.log(splitted);
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

  return newTexts;
}

console.log(transformString(originalText));

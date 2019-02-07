'use strict';

function countLetters(inputString: string) {
  let noWhiteSpace: string = inputString.replace(/\s/g, '');
  let uniqueString: string[] = noWhiteSpace.split('').filter((v, i, a) => a.indexOf(v) === i);
  let resultObject = {};
  uniqueString.forEach(letter => {
    if (letter.match(/[a-z]/i) !== null) {
      resultObject[letter] = noWhiteSpace.split('').filter(a => a === letter).length;
    }
  });
  return resultObject;
}
let testString: string = 'The trial-exam is fun.    Really. Believe me.    '
console.log(countLetters(testString));
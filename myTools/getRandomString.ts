'use strict';

function getRandom(iDigit: number) {
  let randomString: string = '';
  for (let index = 0; index < iDigit; index++) {
    randomString = randomString.concat(Math.random().toString(36).substring(2, 3).toUpperCase());
  }
  return randomString;
}
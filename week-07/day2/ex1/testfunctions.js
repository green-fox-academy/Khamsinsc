'use strict';
const factorUntil = (inputNumber) => {
  if (inputNumber <= 1) {
    return 1;
  } else {
    return inputNumber * factorUntil(inputNumber - 1);
  }
}

console.log(factorUntil(3));


const sumUntil = (inputNumber) => {
  if (inputNumber <= 1) {
    return 1;
  } else {
    return inputNumber + sumUntil(inputNumber - 1);
  }
}

console.log(sumUntil(5));
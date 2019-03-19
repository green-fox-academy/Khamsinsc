'use strict';

require('es6-promise');

const all = (pOne, pTwo) => {
  return new Promise((res, reject) => {
    let counter = 0;
    let array = [];

    pOne.then((resolve) => {
      array[0] = resolve;
      counter++;

      if (counter >= 2) {
        res(array);
      }
    });

    pTwo.then((resolve) => {
      array[1] = resolve;
      counter++;

      if (counter >= 2) {
        res(array);
      }
    });
  });
}

const getPromise1 = function () {
  return new Promise((resolve, reject) => {
    resolve('promise one');
  })
};
const getPromise2 = function () {
  return new Promise((resolve, reject) => {
    resolve('promise two');
  })
};

all(getPromise1(), getPromise2())
  .then(console.log)
  .catch(error => console.log(error.message))
  ;


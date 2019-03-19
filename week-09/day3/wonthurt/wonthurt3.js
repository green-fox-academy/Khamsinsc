'use strict';

require('es6-promise');

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'))
  }, 300);
})
  .then(undefined, error => onReject(error));

const onReject = (error) => {
  console.log(error.message);
};




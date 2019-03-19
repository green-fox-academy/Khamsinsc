'use strict';

require('es6-promise');

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'))
  }, 300);
})

const onReject = (error) => {
  error.then(value => console.log(value), reason => console.log(reason.message));
};

onReject(promise);


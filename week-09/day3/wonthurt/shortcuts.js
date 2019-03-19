'use strict';

require('es6-promise');

let promise1 = Promise.resolve('Resolve message');

let promise2 = Promise.reject(new Error('Error message'));

promise1.then(console.log);

promise2.catch(err=>console.log(err.message));
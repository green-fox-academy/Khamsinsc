'use strict';

require('es6-promise');

let promiseOne = new Promise((fulfill, reject) => {
  fulfill('I FIRED');
  reject(Error('I DID NOT FIRE'))
});


const onRejected = (error) => {
  console.log(error.message);
}

promiseOne.then(console.log, onRejected
);
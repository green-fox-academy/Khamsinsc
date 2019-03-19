'use strict';

require('es6-promise');

const first = () => {
  return new Promise((resolve, reject) => {
    resolve('secret value fjdkafj');
  })
}

const second = (data) => {
  return data;
}

first()
  .then(second)
  .then(console.log);


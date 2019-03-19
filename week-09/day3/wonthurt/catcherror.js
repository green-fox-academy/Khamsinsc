'use strict';

require('es6-promise');

const parsePromised = () => {
  return new Promise((resolve, reject) => {
    try {
      JSON.parse(process.argv[2]);
    } catch (error) {
      reject(error.message);
    }
    resolve(JSON.parse(process.argv[2]));
  })
}

parsePromised()
.then(console.log)
.catch(console.log);
'use strict';

require('es6-promise');


const attachTitle = (input)=>{
  return input = 'DR. ' + input;
}

const promise = new Promise((resolve,reject)=>{
 resolve('MANHATTAN');
})

promise
.then(attachTitle)
.then(console.log);

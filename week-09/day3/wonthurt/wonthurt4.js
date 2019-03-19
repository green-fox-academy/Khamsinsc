'use strict';

require('es6-promise');

let promiseOne = new Promise(
  fullfill => fullfill('I FIRED'),
  reject => reject(new Error('I DID NOT FIRE'))
);

const onRejected = (error)=>{
  
}

promiseOne.then(value => console.log(value));
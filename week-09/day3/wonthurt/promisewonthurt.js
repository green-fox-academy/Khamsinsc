'use strict';

const printTimedOut = ()=>{
  console.log('TIMED OUT!');  
}

setTimeout(printTimedOut, 300);
'use strict';
console.log('apple');
setTimeout(() => {
  console.log('pear');
  setTimeout(() => {
    console.log('melon');
    setTimeout(() => {
      console.log('grapes');
    }, 2000);
  }, 2000);
}, 1000);
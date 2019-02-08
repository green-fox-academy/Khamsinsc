'use strict';

console.log(process.argv);

var readlineSync = require('readline-sync');
var todoItem = readlineSync.question(
  'What would you like to add to your list?'
)
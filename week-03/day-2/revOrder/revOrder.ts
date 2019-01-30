'use strict';

let fs = require('fs');

let fileContent: string = fs.readFileSync('revOrder.txt', 'utf-8').split(/\r\n/).reverse().join('\n');

console.log(fileContent);
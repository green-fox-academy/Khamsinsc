'use strict';

let fs= require('fs');

let fileContent: string[] = fs.readFileSync('reverse.txt','utf-8').split(/\r\n/);
let reversedText: string = '';

fileContent.forEach(reversedLine => {
   reversedText = reversedText.concat((reversedLine||'').split('').reverse().join('').concat('\n'));
});

console.log(reversedText);
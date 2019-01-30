'use strict';

let fs = require('fs');

let fileContent: string[] = fs.readFileSync('encoded.txt', 'utf-8').split(/\r\n/);
let lineSplit: string[] = [];
let encoded: string[] = [];
fileContent.forEach(eachLine => {
    lineSplit = eachLine.split('');
    for (let charIndex = 0; charIndex < lineSplit.length; charIndex++) {
        if (lineSplit[charIndex] !== ' ' ) {
            lineSplit[charIndex] = String.fromCharCode(lineSplit[charIndex].charCodeAt(0) - 1);
        }         
    }     
    encoded.push(lineSplit.join(''));
});

console.log(encoded.join('\n'));
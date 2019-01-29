// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
'use strict';

let fs = require('fs');

function rtnLineCount(b: string) {
    let text: string = fs.readFileSync(b, 'utf-8');
    return console.log(text.split(/\r\n|\r|\n/).length);
}

try {
    rtnLineCount('IExist.txt');
    rtnLineCount('IDontExist.txt');
} catch (error) {
    console.log('0');
}
'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is


let tDotNumber: number = lineCount * 2 - 1;
let midLine: number = (tDotNumber + 1) / 2;
let eachLineSpace: string = '';
let eachLineDot: string = '';
for (let curLN: number = 1; curLN <= lineCount; curLN++) {
    eachLineSpace = '';
    eachLineDot = '';
    for (let curLSpace: number = 1; curLSpace <= midLine - curLN; curLSpace++) {
        eachLineSpace += ' ';
    };
    for (let curLDot = 1; curLDot <= 1 + (curLN - 1) * 2; curLDot++) {
        eachLineDot += '*';
    };
    console.log(eachLineSpace + eachLineDot);
};


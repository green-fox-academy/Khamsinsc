'use strict';

let lineCount: number = 10;
let relDistance: number;
let midLine: number = (lineCount + 1) / 2;
let eachLineContent: string = '';
for (let curLN: number = 1; curLN <= lineCount; curLN++) {
    eachLineContent = '';
    relDistance = Math.abs(midLine - curLN);
    for (let curLSpace: number = 1; curLSpace <= relDistance; curLSpace++) {
        eachLineContent += ' ';
    };
    for (let curLDot: number = 1; curLDot <= (midLine - relDistance) * 2 - 1; curLDot++) {
        eachLineContent += '*';
    };
    console.log(eachLineContent);
};
console.log('this works for both odd and even number of lines, and is without using repeat.')
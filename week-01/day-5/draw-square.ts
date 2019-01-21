'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
//style guide, indentations, settingsben lehet beallitani
let totalDotNumber: number = lineCount;
let spaceNumber: number = lineCount - 2;
let compCubic: any = "%";
let spaceCubit: any = " ";

for (let actLineNumber = 1; actLineNumber <= lineCount; actLineNumber++) {
    if (actLineNumber === 1 || actLineNumber === lineCount) {
        console.log(compCubic.repeat(totalDotNumber));
    } else {
        console.log(compCubic + spaceCubit.repeat(spaceNumber) + compCubic);
    }

} 
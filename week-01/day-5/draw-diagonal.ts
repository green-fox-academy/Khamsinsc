'use strict';

let lineCount: number = 18;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is


let totalDotNumber: number= lineCount
let compCubic:any = "%"
let spaceCubic:any= " "

for (let actLineNumber = 1; actLineNumber <= lineCount ; actLineNumber++ ){
if (actLineNumber == 1 || actLineNumber == lineCount) {
    console.log(compCubic.repeat(totalDotNumber));
} else {
    let leftSpaceNumber:number = actLineNumber-2;
    let rightSpaceNumber:number = lineCount-leftSpaceNumber-3;
    console.log(compCubic + spaceCubic.repeat(leftSpaceNumber) + compCubic + spaceCubic.repeat(rightSpaceNumber) + compCubic);
}
    
} 
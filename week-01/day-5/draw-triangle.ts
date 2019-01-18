'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

for (let cLine:number = 1; cLine <= lineCount; cLine++) {
    let tComp: any = "*";
    console.log(tComp.repeat(cLine));
   
} 



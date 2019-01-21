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

let totalDN: number = 1+(lineCount-1)*2;

// to draw the actual dot in the line is to do (totalDN-1)/2-(actLineCount-1) times spaces, do (actLineCount-1)*2+1 times dots, and repeat the space number
let pbSpace: any = " "
let pbDot: any = "*"
for (let actLineCount:number = 1; actLineCount <= lineCount; actLineCount++) {
    let spaceCount: number= (totalDN-1)/2-(actLineCount-1);
    let dotCount: number = (actLineCount-1)*2+1
    console.log(pbSpace.repeat(spaceCount)+pbDot.repeat(dotCount)+pbSpace.repeat(spaceCount))
   
}
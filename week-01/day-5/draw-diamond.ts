'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
let totalDN:number = (lineCount-lineCount%2)/2*2+1
// to draw the actual dot in the line is to do (totalDN-1)/2-(actLineCount-1) times spaces, do (actLineCount-1)*2+1 times dots, and repeat the space number
// the difference is to augument the actLineCount at the middle of the object to (lineCount-actLineCount)+1
let pbSpace: any = " "
let pbDot: any = "*"
for (let actLineCount:number = 1; actLineCount <= lineCount; actLineCount++) {
    if (actLineCount<=(lineCount-(lineCount%2))/2+1) {
        let spaceCount: number= (totalDN-1)/2-(actLineCount-1);
    let dotCount: number = (actLineCount-1)*2+1;
    console.log(pbSpace.repeat(spaceCount)+pbDot.repeat(dotCount)+pbSpace.repeat(spaceCount))
    } else {
        let spaceCount2: number= (totalDN-1)/2-(lineCount-actLineCount);
    let dotCount2: number = (lineCount-actLineCount)*2+1;
    console.log(pbSpace.repeat(spaceCount2)+pbDot.repeat(dotCount2)+pbSpace.repeat(spaceCount2))
        
    }
    
   
}
console.log("provided that lineCount can only be an odd number, otherwise additional conditions are needed")
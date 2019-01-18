'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
// A standard chess table is 8x8 starting with a white block
let wBlock:any = "W";
let bBlock:any = "B";
let wbBlock:any= wBlock+bBlock;
//let evenLineNumber: number = 8;
let lineNumber: number = 8;
let bigMovingBlocke: any ;
let leftoverBlock: any = bBlock;

if (lineNumber % 2==0) {
    bigMovingBlocke = wbBlock.repeat((lineNumber-2)/2)+wBlock;
} else { 
    bigMovingBlocke = wbBlock.repeat((lineNumber-1)/2);
}



for (let currLine = 1;  currLine<=lineNumber ; currLine++){
    
    if (lineNumber % 2 == 0) {
        if (currLine%2==1) {
            console.log(bigMovingBlocke+leftoverBlock);
        } else {
            console.log(leftoverBlock+bigMovingBlocke);
        }
        }
 else { if (currLine%2==1) {
    console.log(bigMovingBlocke+wBlock);
} else {
    console.log(bBlock+bigMovingBlocke);
}
    
}
}
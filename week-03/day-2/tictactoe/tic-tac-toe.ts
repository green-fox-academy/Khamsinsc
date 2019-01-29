'use strict';

import { fstat, readFileSync } from "fs";

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

let fs = require('fs');
function ticTacToe (filename: string){
let content: string = readFileSync(filename, 'utf-8');
let contentString = (content.split(/\r\n|\r|\n/)).join('');
let winningConditions: number[][] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
let checkDraw: number = 0;
winningConditions.forEach(i => {
    if (contentString[i[0]] === contentString[i[1]] && contentString[i[1]] === contentString[i[2]]) {
        console.log(contentString[i[0]] + ' wins');
        checkDraw = 1;
    }
})
if (checkDraw === 0) {
    console.log('DRAW');
}}

ticTacToe('draw.txt');
ticTacToe('win-o.txt');
ticTacToe('win-x.txt');
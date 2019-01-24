'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
;

function makingMatches(firstInput:string[], secondInput:string[]){
let mmArray:string[] = [];

    for (let index: number = 0; index < Math.max(firstInput.length, secondInput.length); index++) {
        if (firstInput[index]!== undefined) {
            mmArray.push(firstInput[index]);
        }
        if (secondInput[index]!== undefined) {
            mmArray.push(secondInput[index]);
        }
        
    }
        
        for (let index2 = 1; index2 < Math.abs(firstInput.length-secondInput.length); index2++) {
            
            
        }
return mmArray
        
}
console.log(makingMatches(girls, boys));
export = makingMatches; 



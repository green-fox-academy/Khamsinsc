'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4
let thisManyTime:number = 7

let num1:any = 0;
let myFirstPrompt:any= console.prompt("please enter a number: ")
for (let currAskTime = 1; currAskTime<=thisManyTime; currAskTime++){
    
myFirstPrompt;
num1=num1+myFirstPrompt;

}

console.log("Sum: "+num1+", Average: "+num1/thisManyTime);

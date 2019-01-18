'use strict';
// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4
var thisManyTime = 7;
var num1 = 0;
var myFirstPrompt = prompt("please enter a number: ");
for (var currAskTime = 1; currAskTime <= thisManyTime; currAskTime++) {
    myFirstPrompt;
    num1 = num1 + myFirstPrompt;
}
console.log("Sum: " + num1 + ", Average: " + num1 / thisManyTime);

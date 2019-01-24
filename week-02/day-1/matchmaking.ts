'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
;

function makingMatches(a:string[],b:string[]){
let mmArray: string[];
if (a.length>=b.length) {
    for (let index = 0; index < a.length; index++) {
        mmArray[index]=a[index].concat(b[index]);
        }
} else {
    for (let index = 0; index < b.length; index++) {
        mmArray[index]=a[index].concat(b[index]);
        }
}



console.log(makingMatches(girls, boys));

export = makingMatches;



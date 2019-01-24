
//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
'use strict';
function unique(arr: number[]) {
    let sortedA= arr.sort();
    let resultA: number[] = [];
       for (let index: number = sortedA.length; index > 0; index--) {
        if (sortedA[index] !== sortedA[index - 1]) {
           resultA.unshift(sortedA[index - 1]);
        }

    }
    return resultA;
    
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

console.log([1, 11, 34, 11, 52, 61, 1, 34].length)

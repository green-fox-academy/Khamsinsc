
'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(abc: number[]){
   let output: string;
    if (abc.indexOf(7) > -1) {
        output = 'Hooray';
    } else { 
        output = 'Noooooo';
            }
            return output ;
}

console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

export = containsSeven;
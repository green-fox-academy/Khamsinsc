'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverse (a:string){
    let newStr: string[] = reversed.split('');
    newStr = newStr.reverse();
    return newStr.join('');
}

console.log(reverse(reversed));

export = reverse;



'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];


function quoteSwap (abc: string[]){
  let aIndex: number = abc.indexOf('do');
  let bIndex: number = abc.indexOf('cannot');
  let tempVar: string = abc[aIndex];
  abc[aIndex] = abc[bIndex];
  abc[bIndex] = tempVar;
  return abc.join(' ');
}


console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."




export = quoteSwap;


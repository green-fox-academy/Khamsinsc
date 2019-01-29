// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict';

let fs = require('fs');



function textTransfer(fromTxt:string,toTxt:string){
    let content: string = fs.readFileSync(fromTxt, 'utf-8');
    fs.writeFileSync(toTxt, content);
}

try {
    textTransfer('origin.txt', 'madeUpDest.txt');
    console.log('Hooray, the required operation is successful = '+true);
} catch{
    console.log('Oh crap! Something awful just happened, so '+false);
}
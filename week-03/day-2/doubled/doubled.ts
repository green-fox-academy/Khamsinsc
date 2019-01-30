'use strict';

let fs= require('fs');

let fileContent: string = fs.readFileSync('doubled.txt','utf-8').split(/\n|\r|\r\n/).join('\n');



let newString: string='' ;

for (let index = 0; index < fileContent.length; index++) {
    if (index%2 === 0) { 
        newString += fileContent.substring(index,index+1);
    };
    
}
     

console.log(newString);
console.log(fileContent.length);
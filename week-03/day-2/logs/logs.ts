'use strict';

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

let fs = require('fs');

function getUniIp (strFromFile:string){
let content: string = fs.readFileSync(strFromFile, 'utf-8');
let startP:number;
let endP:number;
let ipList: string[]=[];
content.split(/\r\n|\r|\n/).forEach(element => {
    startP = element.indexOf('   ')+3;
    endP = element.lastIndexOf('   ');
    ipList.push(element.slice(startP,endP));    
});
 return ipList.filter((v, i, a) => a.indexOf(v) === i); 
}

function getRatio(strFromFile2:string){
    let content: string = fs.readFileSync(strFromFile2, 'utf-8');
    let ratio : string = content.match(/POST/g).length + ' : '+ content.match(/GET/g).length;
    return ratio;
}

console.log(getUniIp('logs.txt'));
console.log(getRatio('logs.txt'));



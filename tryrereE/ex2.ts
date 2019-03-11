'use strict';

let fs = require('fs');


let fileContent = fs.readFileSync('results.txt', 'utf-8');
let stringArray: string[] = fileContent.split(/\r\n/);
stringArray.shift();
let numberMatrix =
  stringArray.map((e: string) => e.split(' ').map(e => parseInt(e)));
let minArray: number[] = [99, 99, 99, 0, 0, 0],
  maxArray: number[] = [0, 0, 0, 0, 0, 0];

for (let index = 0; index < 3; index++) {
  numberMatrix.forEach(element => {
    if (element[index] < minArray[index]) {
      minArray[index] = element[index];
      minArray[index + 3] = element[3];
    }
    if (element[index] > maxArray[index]) {
      maxArray[index] = element[index];
      maxArray[index + 3] = element[3];
    }
  });
}

const answerObject = {
  France : `${minArray[3]}, ${maxArray[3]}`,
  Sweden : `${minArray[4]}, ${maxArray[4]}`,
  Germany : `${minArray[5]}, ${maxArray[5]}`
}

console.log(answerObject);

/*
console.log(fileContent);
console.log(stringArray);
console.log(numberMatrix);
 */
'use strict';

let fs = require('fs');

const dataMunging = (dataPath: string) => {

  let fileContent: string[] = fs.readFileSync(dataPath, 'utf-8').split(/\n/);
  let newContent: string[][] = [];
  fileContent.forEach((element: string, i: number) => {
    newContent[i] = element.trim().split(/\s+/);
  });
  let index: string;
  newContent.reduce((acc: number, element:string[]) => {
    console.log(parseFloat(element[1]) - parseFloat(element[2]));
    if (parseFloat(element[1]) - parseFloat(element[2]) > acc) {
      
      acc = parseFloat(element[1]) - parseFloat(element[2]);
      index = element[0];
    }
    return acc;
  }, 0)
  
  return index;
}
console.log(dataMunging('weather.dat'));
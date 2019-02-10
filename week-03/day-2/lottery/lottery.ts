'use strict';

let fs = require('fs');

let fileContent: string[] = fs.readFileSync('lottery.txt', 'utf-8').split(/\r\n/);
let lotteryNumbers: string[] = [];
fileContent.forEach((eachLine: string): void => {
  lotteryNumbers.push(eachLine.slice(eachLine.lastIndexOf('Ft;') + 3));
});
let lNN: string[] = lotteryNumbers.join(';').split(';');
let uniqueLottery: string[] =
  lNN.filter((v: string, i: number, a: string[]): boolean => a.indexOf(v) === i);
let lengthCheck: number;
let currentFrequent: string;
let result: string[] = [];
for (let index: number = 0; index < 5; index++) {
  lengthCheck = 0;
  uniqueLottery.forEach(number => {
    if (lNN.filter(n => n === number).length > lengthCheck) {
      lengthCheck = lNN.filter(n => n === number).length;
      currentFrequent = number;
    }
  });
  result.push(currentFrequent);
  uniqueLottery.splice(uniqueLottery.indexOf(currentFrequent), 1);
}
console.log(result);
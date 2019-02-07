'use strict';

export class SumClass {
  getSum(inputArray: number[]):number{
    let sum:number = 0;
    inputArray.forEach(i => {
      sum += i;
      
    });
    return sum;
  }
}
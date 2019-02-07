'use strict';

export class SumClass {
  getSum(inputArray: number[]): number {
    if (inputArray === null) { return null; } else {
      let sum: number = 0;
      inputArray.forEach((i) => {
        sum += i;
      });
      return sum;
    }
  }
}
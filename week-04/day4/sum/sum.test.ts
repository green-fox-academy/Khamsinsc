'use strict';

import { SumClass } from './sum';

let test = require('tape');

test('Sum of a list of numbers', (input) => {
  const testArray1: number[] = [1, 2, 3, 4, 5];
  const testArray2: number[] = [5];
  const testArray3: number[] = [1, 3, 7, 4, 9, 11, 55];
  const testArray4: number[] = null;
  const testArray5: string = 'astring';

  const testInstance: SumClass = new SumClass();
  const actual: number = testInstance.getSum(testArray1);
  const actual2: number = testInstance.getSum(testArray2);
  const actual3: number = testInstance.getSum(testArray3);
  const actual4: number = testInstance.getSum(testArray4);
/*   const actual5: number = testInstance.getSum(testArray5); */
  const expected: number = 15;

  input.equal(actual, expected);
  input.equal(actual2, 5);
  input.equal(actual3, 90);
  input.equal(actual4, null);
/*   input.equal(actual5, undefined); */
  
  input.end();
})
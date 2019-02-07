'use strict';

import { SumClass } from './sum';

let test = require('tape');

test('Sum of a list of numbers', (input) => {
  const testArray: number[] = [1, 2, 3, 4, 5];
  const testInstance: SumClass = new SumClass();
  const actual: number = testInstance.getSum(testArray);
  const expected: number = 15;

  input.equal(actual, expected);
  input.equal(actual, 20);
  input.end();
})
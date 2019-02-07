'use strict';

import { genFibonacci } from './fibonacci';

let test = require('tape');

test('return the fibonacci number according to the given index', t => {
  const actual1: number = genFibonacci(10);
  const actual2: number = genFibonacci(5);
  const actual3: number = genFibonacci(-3);

  t.equal(actual1, 55);
  t.equal(actual2, 5);
  t.equal(actual3, 1);
  t.end();
})
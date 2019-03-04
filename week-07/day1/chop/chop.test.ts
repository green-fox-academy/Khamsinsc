'use strict';

let test = require('tape');
import { chop } from './chop';


test('testing chop', t => {
  let array1: number[] = [1, 3, 5, 7, 9, 11, 12, 13, 14, 15, 16];

  t.equal(chop(1, array1), 0);
  t.equal(chop(3, array1), 1);
  t.equal(chop(5, array1), 2);
  t.equal(chop(16, array1), 10);
  t.equal(chop(2, array1), -1);
  t.equal(chop(4, array1), -1);
  t.equal(chop(6, array1), -1);
  t.end();
});
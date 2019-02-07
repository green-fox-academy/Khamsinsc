'use strict';

import { countLetters } from './countletters';

let test = require('tape');
let fs = require('fs');
test('Should give a list of letters with their occurences in the input string', t => {
  const testString: string = fs.readFileSync('countChar.txt', 'utf-8');
  const testString2: string = fs.readFileSync('customfile2.txt', 'utf-8');
  const actual1 = countLetters(testString);
  const actual2 = countLetters(testString2);
  const expected1 = {
    T: 1,
    h: 1,
    e: 7,
    t: 1,
    r: 1,
    i: 3,
    a: 3,
    l: 4,
    x: 1,
    m: 2,
    s: 1,
    f: 1,
    u: 1,
    n: 1,
    R: 1,
    y: 1,
    B: 1,
    v: 1
  }
  const expected2 = {
    A: 1,
    B: 1,
    a: 5,
    f: 8
  }
  t.deepEqual(actual1, expected1);
  t.deepEqual(actual2, expected2);
  t.end();
})


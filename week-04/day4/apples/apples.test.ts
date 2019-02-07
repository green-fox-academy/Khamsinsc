'use strict';
import {getApple} from './apples';

let test = require('tape');

test('Print apple', input => {
  const actual = getApple();
  const expected = 'apple';

  input.equal(actual,expected);
  input.equal(actual, 'apples');
  input.end();
})

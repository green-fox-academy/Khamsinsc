'use strict';
import {test} from 'tape';
import {getApple} from './apples';



test('Print apple', input => {
  const actual = getApple();
  const expected = 'apple';

  input.equal(actual,expected);
  input.equal(actual, 'apples');
  input.end();
})

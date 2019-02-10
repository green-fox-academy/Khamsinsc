'use strict';

import { checkAnagram } from './anagram';

let test = require('tape');

test('Checking if two strings are anagrams', (t: any): void => {
  const teststring: string[] = ['eat for BSE', 'roast beef'];
  const teststring2: string[] = ['true lady', 'adultery'];
  const teststring3: string[] = ['William Shakespeare', 'I am a weakish speller'];
  const teststring4: string[] = ['Madam Curie', 'Raadium came'];

  t.equal(checkAnagram(teststring), true);
  t.equal(checkAnagram(teststring2), true);
  t.equal(checkAnagram(teststring3), true);
  t.equal(checkAnagram(teststring4), false);
  t.end();
})
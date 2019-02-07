'use strict';

export function checkAnagram(inputStr: string[]) {
  return inputStr[1].replace(/\s/gi, '').toLowerCase().split('').sort().join('') === inputStr[0].replace(/\s/gi, '').toLowerCase().split('').sort().join('');
}



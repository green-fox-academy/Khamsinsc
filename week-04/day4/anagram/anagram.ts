'use strict';

export function checkAnagram(inputStr: string[]) {
  const strManip = (strPart: string): string => {
    return strPart.replace(/\s/gi, '').toLowerCase().split('').sort().join('');
  }
  return strManip(inputStr[1]) === strManip(inputStr[0]);
}



'use strict';
let dropedNumbers: number = 0;
let checkedIndex: number = 0;
let returnValue: number = 0;
let newArr: number[] = [];
export const chop = (number: number, iArr: number[]): number => {
  if (iArr.length > 1) {
    checkedIndex = Math.floor(iArr.length / 2);    
    if (iArr[checkedIndex] > number) {
      newArr = iArr.slice(0, checkedIndex);
    } else {
      newArr = iArr.slice(checkedIndex);     
      dropedNumbers += checkedIndex;      
    }
    chop(number, newArr);
  } else {
    if (iArr.length === 1) {
      returnValue = iArr[0] === number ? dropedNumbers : -1;
      dropedNumbers = 0;
      checkedIndex = 0;      
      newArr = [];
    }
  }
  return returnValue;

}
'use strict';

const sumTenCounter = (arr: number[], arrTwo: number[]): number => {
  let allPairMatrix: number[][] = [];

  arr.forEach((arrElement: number) => {
    arrTwo.forEach((arrTwoElement: number) => {
      allPairMatrix.push([arrElement, arrTwoElement]);
    })
  })

  let tenPairMatrix: number[][] = allPairMatrix.filter((e: number[]) => {
    return e[0] + e[1] === 10;
  })

  let distinctPairs: number[][] = tenPairMatrix.map(e => e.sort()).
    sort((a: number[], b: number[]) => a[0] - b[0]).
    filter((e: number[], i: number, array: number[][]) => {
      return i === array.length - 1 ? e : e[0] !== (array[i + 1][0] || '');
    })

  return distinctPairs.length;
}

let arr1: number[] = [1, 2, 3, 4, 5, 6];
let arr2: number[] = [8, 5, 4, 6];
console.log(sumTenCounter(arr1, arr2));

let arr3 = [0, 7, 5, 4, 4, 6];
let arr4 = [8, 10, 4, 3, 5, 5, 6];
console.log(sumTenCounter(arr3,arr4));
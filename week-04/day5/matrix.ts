'use strict';

const matrix: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
  [3, 4, 5, 6]
]

let rotateMatrix = (inputM: number[][]): number[][] => {
  let result: number[][] = [];
  for (let index = 0; index < matrix.length; index++) {
    result[index] = [];
    for (let H = 0; H < matrix.length; H++) {
      result[index][matrix.length - 1 - H] = matrix[H][index];
    }
  }
  return result;
}
rotateMatrix(matrix).forEach(element => {
  console.log(element.join(''));
});
'use strict';

export const genFibonacci = (index: number): number => {
  if (index <= 2) {
    return 1;
  } else {
    return genFibonacci(index - 1) + genFibonacci(index - 2);
  }
}
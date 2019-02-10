'use strict';
/* Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

JavaScript: returns an Array;

Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
] */


function towerBuilder(nFloors: number): string[] {
  let longestLine: number = 2 * nFloors - 1;
  let resultM: string[][] = [];
  for (let lineI: number = 0; lineI < nFloors; lineI++) {
    resultM[lineI] = [' '];
    for (let columnI: number = 0; columnI < longestLine; columnI++) {
      resultM[lineI][columnI] = Math.abs(columnI - (nFloors - 1)) <= lineI ? '*' : ' ';
    }
  }
  return resultM.map((e: string[]): string => e.join(''));
}

console.log(towerBuilder(5));
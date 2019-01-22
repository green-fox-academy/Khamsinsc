// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

'use strict';

function sum (i : number){
    let sumN: number = 0 ;
    for (let startN = 1; startN <=i; startN++){
       sumN = sumN + startN;
    }
    return sumN;
}
console.log(sum(10))
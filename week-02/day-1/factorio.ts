// -  Create a function called `factorio`
//    that returns it's input's factorial
'use strict';
function factorio(i: number) {
    let factSum: number = 1;
    for (let index = 1; index <= i; index++) {
        factSum = factSum * index;
    }
    return factSum;
}
console.log(factorio(5));
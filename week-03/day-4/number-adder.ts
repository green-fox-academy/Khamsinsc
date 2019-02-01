'use strict';
let adder: number = 0;
function numberAdder(n: number) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n + numberAdder(n - 1);
    }
}
console.log(numberAdder(20));
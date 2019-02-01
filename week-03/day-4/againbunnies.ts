'use strict';

function bunnyAgain(n: number) {
    if (n <= 1) {
        console.log(2);
        return 2;
    } else {
        if (n % 2 == 0) {
            console.log(3);
            return 3 + bunnyAgain(n - 1);
        } else {
            console.log(2);
            return 2 + bunnyAgain(n - 1);
        }
    }
}

console.log(bunnyAgain(7));
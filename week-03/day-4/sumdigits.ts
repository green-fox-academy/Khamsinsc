'use strict';
function sumDigits(n:number){
    if (n/10 < 1) {
        return n;
    } else {
        return n%10 + sumDigits(Math.floor(n/10));
    }
}
console.log(sumDigits(123456));
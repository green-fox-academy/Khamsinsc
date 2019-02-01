'use strict';

function bunny1(n:number){
    if (n <= 1){
        return 2;
    } else {
        return 2 + bunny1(n-1);
    }
}

console.log(bunny1(10));

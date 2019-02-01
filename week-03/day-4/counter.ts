'use strict';

function countDown(n:number) {
    console.log(n);
    n == 0 ? console.log('Count Down Over') : countDown(n - 1);
}

countDown(10);
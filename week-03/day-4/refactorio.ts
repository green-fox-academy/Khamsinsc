'use strict';

function refactorio(n: number) {
    if (n <= 0) {
        return 1;
    } else {
        return n * refactorio(n - 1);
    }
}

console.log(refactorio(5));
'use strict';

class Counter {
    integer: number;
    initialV: number;

    constructor(inputV: number = 0) {
        this.integer = inputV;
        this.initialV = inputV;
    }

    add(n: number = 1) {
        this.integer += n;
    }

    get() {
        console.log(this.integer);
    }

    reset() {
        this.integer = this.initialV;
    }

}
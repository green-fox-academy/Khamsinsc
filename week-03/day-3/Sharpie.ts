'use strict';

class Sharpie {
    color: string;
    width: number;
    inkAmount: number;

    constructor(iC: string, iW: number, iInkA: number = 100) {
        this.color = iC;
        this.width = iW;
        this.inkAmount = iInkA;
    }

    use() {
        this.inkAmount--;
    }
}
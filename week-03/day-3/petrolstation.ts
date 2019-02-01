'use strict';

class Station {
    gasAmount:number;
    refill(icar:Car){
    let gasDemand:number = icar.capacity - icar.gasAmount;
    this.gasAmount -= gasDemand;
    icar.gasAmount += gasDemand;
    }
}

class Car {
    gasAmount:number;
    capacity:number;
    constructor(iGasAmount:number = 0, iCapacity:number = 100){
    
    }
}
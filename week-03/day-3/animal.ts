'use strict';

class Animal {
    hunger: number;
    thirst: number;
    constructor(iHunger: number = 50, iThirst: number = 50) {
        this.hunger = iHunger;
        this.thirst = iThirst;
    }
    eat() {
        this.hunger -= 1;
    }
    drink() {
        this.thirst -= 1;
    }
    play() {
        this.hunger += 1;
        this.thirst += 1;
    }
}
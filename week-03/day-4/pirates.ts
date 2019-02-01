'use strict';

class Pirate {
    drinkCount: number;
    answer: string;
    isSleeping: boolean;
    isDead: boolean;
    isAParrot: boolean;
    
    constructor(isParrotInput:boolean = false){
        this.isAParrot = isParrotInput;
    }

    drinkSomeRum() {
        //intoxicates pirate randomly;
        this.isDead == true ? console.log('he\'s dead.') : this.drinkCount++;
    }

    howsItGoingMate() {
        //the pirate replies;
        this.answer = this.drinkCount <= 0 ? 'Pour me anudder!' : 'Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?';
        console.log(this.answer);
    }

    passOutAndSleep() {
        this.isSleeping = true;
    }

    die() {
        this.isDead = true;
    }

    brawl(ipirate:Pirate){
        let randomN: number =Math.floor(Math.random()*3)+1;
        randomN ===1?  this.isDead = true : randomN === 2? ipirate.isDead = true : ipirate.isSleeping = this.isSleeping = true  ;
    }
}

let pirate1 = new Pirate();
let pirate2 = new Pirate();
let theParrot = new Pirate(true);

pirate1.brawl(pirate2);

console.log(pirate1.isDead, pirate2.isDead, pirate1.isSleeping, pirate2.isSleeping);

class Ship {
    roster: Pirate[] = [];

    constructor(){

    }

    fillShip(inputPirate: Pirate, isCaptain: boolean = false){
    
    }
}
    
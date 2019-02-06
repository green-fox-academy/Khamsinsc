'use strict';

export abstract class Animal {
  name: string;
  age: number;
  gender: string;
  height: number;
  cuteness: number;

  constructor(iName: string) {
    this.name = iName;
  }

  abstract breed(): void;

  getName() {
    return this.name;
  }
}

class Reptile extends Animal {

  jumpHigh: boolean;
  coldBlooded() {
    return 'Just chillin cold-bloodedly';
  };

  breed() {
    return 'laying eggs.';
  };
}

class Mammal extends Animal {
  isSmelly: boolean;
  actingMammally() {
    return 'actingMammally';
  };

  breed() {
    return 'pushing miniature versions out.';
  };
}

class Bird extends Animal {
  fliesFast: boolean;
  singing() {
    return 'the bird sings';
  };

  breed() {
    return 'laying eggs.';
  };
}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());
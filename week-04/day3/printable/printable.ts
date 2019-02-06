'use strict';

interface Printable {
  printAllFields(): void,
}

class Domino implements Printable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }
  compareTo(other: Domino) {
    return this.values[0] - other.values[0] !== 0 ? this.values[0] - other.values[0] : this.values[1] - other.values[1];
  }

  printAllFields() { console.log(this) };

}

let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

for (let domino of dominoes) {
  domino.printAllFields();
}


class Thing implements Printable {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete() {
    this.completed = true;
  }
  printAllFields() { console.log(this) };
  compareTo(other: Thing) {
    return this.completed === other.completed ? this.name.charCodeAt(0) - other.name.charCodeAt(0) : this.completed === true ? 1 : -1;
  }
}

class Fleet {
  things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing) {
    this.things.push(thing);
  }
}

let thing4 = new Thing('Get milk');
let thing3 = new Thing('Remove the obstacles');
let thing1 = new Thing('Stand up');
let thing2 = new Thing('Eat lunch');
thing3.complete();
thing4.complete();
let fleet1 = new Fleet();
fleet1.add(thing1);
fleet1.add(thing2);
fleet1.add(thing3);
fleet1.add(thing4);

for (let Thing of fleet1.things) {
  Thing.printAllFields();
}
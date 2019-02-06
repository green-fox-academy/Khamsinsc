'use strict';

interface Comparable {
  compareTo(other: Comparable): number;
  /*
  * returns negative number if this is smaller than other
  * returns 0 if they are the same
  * returns positive number if this is greater than other
  */
}

class Thing implements Comparable {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete() {
    this.completed = true;
  }

  compareTo(other: Thing) {
    return this.completed === other.completed ? this.name.charCodeAt(0) - other.name.charCodeAt(0) : this.completed === true ? 1 : -1;
  }
}

let thing4 = new Thing('Get milk');
let thing3 = new Thing('Remove the obstacles');
let thing1 = new Thing('Stand up');
let thing2 = new Thing('Eat lunch');
thing3.complete();
thing4.complete();

console.log([thing1,thing2,thing3,thing4].sort(function (a: Thing, b: Thing): number {
  return a.compareTo(b);
}));
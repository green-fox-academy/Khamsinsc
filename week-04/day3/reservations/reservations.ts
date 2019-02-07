'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {

  constructor() {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
  }

  getDowBooking(): string {
    let dowArray: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return dowArray[Math.floor(Math.random() * 7)];
  }
  getCodeBooking(): string { return getRandom(8); }
}

function getRandom(iDigit: number) {
  let randomString: string = '';
  for (let index = 0; index < iDigit; index++) {
    randomString = randomString.concat(Math.random().toString(36).substring(2, 3).toUpperCase());
  }
  return randomString;
}

let res1 = new Reservation();
let res2 = new Reservation();
let res3 = new Reservation();
let res4 = new Reservation();
let res5 = new Reservation();
let res6 = new Reservation();
let res7 = new Reservation();
let res8 = new Reservation();

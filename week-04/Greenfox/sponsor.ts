'use strict';

import { Person } from './Person';

export class Sponsor extends Person {
  company: string;
  hiredStudents: number;

  constructor(inputName: string = 'Jane Doe', inputAge: number = 30, inputGender: string = 'female', iCompany: string = 'Google') {
    super(inputName, inputAge, inputGender);
    this.company = iCompany;
    this.hiredStudents = 0;
  }

  getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  hire() {
    this.hiredStudents++;
  }
}

let sponsor1: Sponsor = new Sponsor();

sponsor1.hire();
sponsor1.introduce();


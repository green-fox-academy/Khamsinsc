'use strict';

export class Person {
  name: string;
  age: number;
  gender: string;

  constructor(inputName: string = 'Jane Doe', inputAge: number = 30, inputGender: string = 'female') {
    this.name = inputName;
    this.age = inputAge;
    this.gender = inputGender;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}`);
  }

  getGoal() {
    console.log(`My goal is: Live for the moment!`);
  }
}
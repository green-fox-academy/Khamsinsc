'use strict';

import { Person } from './Person';

export class Mentor extends Person {
  level: string;

  constructor(inputName: string = 'Jane Doe', inputAge: number = 30, inputGender: string = 'female', ilevel: string = 'intermediate') {
    super(inputName, inputAge, inputGender);
    this.level = ilevel;
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }
}

let mentor1: Mentor = new Mentor();

mentor1.introduce();

/*
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
} */
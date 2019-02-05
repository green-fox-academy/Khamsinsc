'use strict';

class Person {
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

class Student extends Person {
  
  previousOrganization: string;
  skippedDays: number;

  constructor(inputName: string = 'Jane Doe', inputAge: number = 30, inputGender: string = 'female', previousOrganization: string = 'School of Life') {
    super(), 
    this.skippedDays = 0;
  }

  getGoal() {
    console.log(`Be a junior software developer.`);
  }

  introduce() {
    let introMessage: string = `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} from the course already.`
    console.log(introMessage);
  }

  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}
let exStu1: Student = new Student('Bill Gates', 60, 'Male', 'Microsoft');
console.log(exStu1.age);
class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string;

  constructor(inputName: string = 'Jane Doe', inputAge: number = 30, inputGender: string = 'female', inputLevel: string = 'intermediate') {
    this.name = inputName;
    this.age = inputAge;
    this.gender = inputGender;
    this.level = inputLevel;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }

  getGoal() {
    console.log(`My goal is: Live for the moment!`);
  }
}

class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  constructor(inputName: string = 'Jane Doe', inputAge: number = 30, inputGender: string = 'female', inputCompany:string = 'Google') {
    this.name = inputName;
    this.age = inputAge;
    this.gender = inputGender;
    this.company = inputCompany;
    this.hiredStudents = 0;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  hire() {
    this.hiredStudents += 1;
  }

  getGoal() {
    console.log(`Hire brilliant junior software developers`);
  }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}
'use strict';
import { Person } from './Person'

export class Student extends Person {

  previousOrganization: string;
  skippedDays: number;

  constructor(inputName: string = 'Jane Doe', inputAge: number = 30, inputGender: string = 'female', inputPO: string = 'School of Life') {
    super(inputName, inputAge, inputGender);
    this.previousOrganization = inputPO;
    this.skippedDays = 0;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} from the course already.`);
  }

  getGoal() {
    console.log(`My goal is: Be a junior software developer.`);
  }

  skipDays(iNum: number){
    this.skippedDays++;
  }
}

let expStudent1: Student = new Student();

expStudent1.introduce();
'use strict';

let fs = require('fs');
let readlineSync = require('readline-sync');

let requireInputString: string[] = (fs.readFileSync('requireInputString.txt', 'utf-8') || '').split('\r\n' || '\r' || '\n');

let userInput: string = readlineSync.question(
  `${requireInputString[Math.floor(Math.random() * 5)]}`
);


const printComLine = () => {
  console.log(fs.readFileSync('comLineArguments.txt', 'utf-8'));
};

const returnToDoList = () => {
  let toDoContent: string = fs.readFileSync('myToDoList.txt', 'utf-8') || '';
  if (toDoContent === '') {
    console.log('No todos for today! :)');
  } else {
    let toDoContentArr: string[] = toDoContent.trim().split('\r\n' || '\r' || '\n');
    for (let taskI: number = 0; taskI < toDoContentArr.length; taskI++) {
      toDoContentArr[taskI] = `${taskI + 1} - [${toDoContentArr[taskI].match(/DONE/g) !== null ? 'X' : ' '}] ${toDoContentArr[taskI].slice(0, -6)}`;
      console.log(toDoContentArr[taskI].substr(-7));
    }
    console.log(toDoContentArr.join('\r\n'));
  }
};

const addTask = (input: string) => {
  input.length > 2 ? fs.appendFile('myToDoList.txt', `${input.slice(input.indexOf(`"`) + 1, input.lastIndexOf(`"`))}*NONE*\r\n`, (err) => {
    if (err) throw err;
    console.log('The task has been added successfully!');
  }) : console.log(`Unable to add: no task provided`);
};

const removeTask = (input: string) => {
  if (input.trim().length === 2) { console.log(`Unable to remove: no index provided`) } else {
    if (input[3].match(/\d/) === null) { console.log('Unable to remove: index is not a number') } else {
      let rmIndex: number = parseInt(input.slice(3, 4)) - 1;
      let replaceArray: string[] = fs.readFileSync('myToDoList.txt', 'utf-8').trim().split('\r\n' || '\r' || '\n');
      if (rmIndex + 1 > replaceArray.length) {
        console.log(`Unable to remove: index is out of bound`)
      } else {
        console.log(`removing task ${replaceArray[rmIndex]}...`)
        replaceArray.splice(rmIndex, 1);
        fs.writeFileSync('myToDoList.txt', replaceArray.join('\r\n'));
        console.log(`Success!`);
      }
    }
  }
}

const argumentError = () => {
  console.log(`Unsupported argument\r\nDo you even know my languange??\r\nRead up!!!`);
  printComLine();
}

const checkFile = (input: string) => {
  if (input.trim().length === 2) { console.log(`Unable to check: no index provided`) } else {
    if (input[3].match(/\d/) === null) { console.log('Unable to check: index is not a number') } else {
      let chkIndex: number = parseInt(input.slice(3, 4)) - 1;
      let listArray: string[] = fs.readFileSync('myToDoList.txt', 'utf-8').trim().split('\r\n' || '\r' || '\n');
      if (chkIndex + 1 > listArray.length) {
        console.log(`Unable to check: index is out of bound`)
      } else {
        console.log(`Task "${listArray[chkIndex].slice(0, -7)}" is checked!`);
        listArray[chkIndex] = listArray[chkIndex].replace(/NONE/g, 'DONE');
        fs.writeFileSync('myToDoList.txt', listArray.join('\r\n'));
        console.log(`Success!`);
      }
    }
  }
}

userInput === '' ? printComLine() : userInput.slice(0, 2) === '-l' ? returnToDoList() : userInput.slice(0, 2) === `-a` ? addTask(userInput) : userInput.slice(0, 2) === `-r` ? removeTask(userInput) : userInput.slice(0, 2) === `-c` ? checkFile(userInput) : argumentError();




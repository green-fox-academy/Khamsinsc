'use strict';
/* 
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

 */

function tickets(peopleInLine: number[]): string {
  let bill25Count: number = 0;
  let bill50Count: number = 0;
  let controller: string = 'YES';
  peopleInLine.forEach((bill: number): void => {
    if (bill === 25) {
      bill25Count++;
    } else {
      if (bill === 50) {
        bill25Count--;
        bill50Count++;
      } else {
        if (bill50Count <= 0) {
          bill25Count = bill25Count - 3;
        } else {
          bill25Count--;
          bill50Count--;
        }
      }
    } if (bill25Count < 0 || bill50Count < 0) {
      controller = 'NO';
    }
  })
  return controller;
}

console.log(tickets([25, 25, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 50, 100]));
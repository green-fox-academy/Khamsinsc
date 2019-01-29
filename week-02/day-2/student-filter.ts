'use strict';

const students: any[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
];
// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average
function fourCandies(abc: object[]) {
    let result: any[] = [];
    let count: number = -1;
    abc.forEach(element => {
        if (element['candies'] > 4) {
            count++
            result[count] = element['name'];
        }
    }); return result;
}

console.log(fourCandies(students));

function avCandies (abc: object[]){
    let sumAv: number = 0;
    abc.forEach(element => {
        sumAv = element['candies'] + sumAv;
    });
    return sumAv/abc.length;
}
console.log(avCandies(students));




// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai = [3, 4, 5, 6, 7];
let sum: number = 0;
for (let index = 0; index < ai.length; index++) {
    sum = sum + ai[index];
    }

console.log(sum);
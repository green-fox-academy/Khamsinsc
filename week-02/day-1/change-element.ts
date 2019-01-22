
// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList = [1, 2, 3, 8, 5, 6];

let changedList = numList.map(function(i){
    return i=i/2;
});

console.log(changedList[3]);

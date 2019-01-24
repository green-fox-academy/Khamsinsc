// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`7

let numList = [3, 4, 5, 6, 7];
let newList = numList.reverse();
console.log(newList);

let tempArray = [];
for (let index = 0; index < numList.length; index++) {
    tempArray[index]=numList[numList.length-1-index];
    

}

console.log(tempArray);
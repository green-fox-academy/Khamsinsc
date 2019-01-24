
'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let beginStr: string = 'My todo:\n';
let endStr: string = ' - Download games\n';
let endendStr: string = '   - Diablo\n';
todoText= beginStr.concat(todoText, endStr, endendStr);
console.log(todoText);
/* let myTodoList: string[] = [beginStr, todoText, endStr, endendStr]
myTodoList.forEach(element => {
 console.log(element);   
});
 */
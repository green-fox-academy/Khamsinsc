'use strict';
/* Description:
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases. */


function likes(names: string[]): string {
  let isPlural: string = names.length > 1 ? 'like' : 'likes';
  let result: string = names.length === 0 ? 'no one' :
    names.length === 1 ? `${names[0]}` :
      names.length === 2 ? `${names.join(' and ')}` :
        names.length > 3 ? `${names[0]}, ${names[1]} and ${names.length - 2} others` :
          `${names[0]}, ${names[1]} and ${names[2]}`;

  return `${result} ${isPlural} this`;
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';
let secP: string = quote.substring(quote.indexOf('you'));
let fP: string = quote.substring(0, (quote.indexOf('It') + 'It'.length));
quote = fP.concat(' always takes longer than ', secP);
console.log(quote);
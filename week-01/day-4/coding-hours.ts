'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52


var possibleCdHours = [17*5*6, (17*5-1)*6, (17*5-2)*6, (17*5-3)*6, (17*5-4)*6, (17*5-5)*6];
var maxCdHours = Math.max (...possibleCdHours);
var minCdHours = Math.min(17*5*6, (17*5-1)*6, (17*5-2)*6, (17*5-3)*6, (17*5-4)*6, (17*5-5)*6);
var wkcdHours = 5*6;

console.log("Not counting the national holidays, because I cba, an attendance spents from "+minCdHours+" hours to "+maxCdHours+"." );

console.log("If the average work hours weekly is 52, discounting the effects of national holidays and those in absent, the percentage of the coding hours in the semester is "+Math.round(wkcdHours/52*100)+"%.");

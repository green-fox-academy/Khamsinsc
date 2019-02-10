
let a:string = '07:05:45PM';
function timeConversion(s:string) {
  let amOrPM:string = s.substr(8);
  let timeArray:string[] = s.substr(0,8).split(':');
  let hourInNumber: number = parseInt(timeArray[0]);
  if (amOrPM === 'AM' && hourInNumber === 12) {
     timeArray[0] = '00' ;
  } else {
    amOrPM === 'PM' && hourInNumber > 1 && hourInNumber < 12 ? timeArray[0] = `${hourInNumber + 11}` : null;
  }     
  return timeArray.join(':');
}

console.log(timeConversion(a));
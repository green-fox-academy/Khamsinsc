import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

let thing1 = new Thing('Get milk');
let thing2 = new Thing('Remove the obstacles');
let thing3 = new Thing('Stand up');
let thing4 = new Thing('Eat lunch');
thing3.complete();
thing4.complete();

let fleet1 = new Fleet();
fleet1.add(thing1);
fleet1.add(thing2);
fleet1.add(thing3);
fleet1.add(thing4);
//with console.log(a,b)
fleet1.things.forEach(element => {
    console.log((element.completed === true) ? '[x] ':'[ ] ', element.name);
})

//with template string
fleet1.things.forEach(element => {
    console.log(`[${(element.completed === true)? 'x':' '}] ${element.name}`);
})





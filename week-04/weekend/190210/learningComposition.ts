'use strict';

const skeleton = name => {
  const self = {
    name
  };
  return self;
}

const bobby = skeleton('bobby');
console.log(bobby);
bobby.name = 'bbb';
console.log(bobby);
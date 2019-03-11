let candies = document.querySelector('.candies');
let createCandy = document.querySelector('.create-candies');
let buyLolly = document.querySelector('.buy-lollypops');
let makeRain = document.querySelector('.candy-machine');
let production = document.querySelector('.speed')
let lollydisp = document.querySelector('.lollypops');

let lollypopCount = 3;
let candyCount = 0;
let speed = 0;
production.textContent = Math.round(lollypopCount / 10);

createCandy.addEventListener('click', () => {
  candyCount++;
  candies.textContent = candyCount;
})

buyLolly.addEventListener('click', (e) => {
  lollypopCount++;
  lollydisp.textContent += '🍭';
  candyCount -= 10;
  candies.textContent = candyCount;
  production.textContent = speed;
})

let candyfact = setInterval(() => {
  speed = Math.round(lollypopCount / 10);
  candyCount += speed;
  candies.textContent = candyCount;
}, 1000);

makeRain.addEventListener('click', (e) => {
  speed = speed * 10;
  lollypopCount = speed * 10;
  production.textContent = speed;
})

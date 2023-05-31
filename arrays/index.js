const foods = [];

foods.push('pizza','cheeseburger');

foods.unshift('tacos');

let favFood = foods[1];

foods.splice(2,0,'tofu');

foods.splice(1,1,'sushi','cupcake');

const yummy = foods.slice(1,3);

const soyIdx = foods.indexOf('tofu');

const allFoods = foods.join(" -> ");

const hasSoup = foods.includes('soup');
  
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = [];

nums.forEach(function(num){
  if (num % 2) odds.push(num);
})

const fizz = [];
const buzz = [];
const fizzbuzz = [];

nums.forEach(function(num){
  if (num % 15 === 0) fizzbuzz.push(num);
  if (num % 3 === 0) fizz.push(num);
  if (num % 5 === 0) buzz.push(num);
})

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length -1];

const num = numArrays[2][1];

let total = 0;
numArrays.forEach(function(numArray){
  numArray.forEach(function(num){
    total += num;
  })
})
console.log(total);
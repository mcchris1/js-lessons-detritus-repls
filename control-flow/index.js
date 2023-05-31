/*let name=prompt('enter your name: ');
let city=prompt('city? ');

console.log('Hi ' + name + ', you are in ' + city + '.');*/

/*if (age > 21) {
  console.log("fuggit i'm not following the rest")
}*/

/*let x = 5;

while (x<10) {
  console.log(x);
}*/

/*if (true) {
  console.log('truthy');
} else {
  console.log('falsey');
}*/

/*let upTo = prompt('Iterate from 1 to ?');
upTo = parseInt(upTo);
for (let n = 1; n <= upTo && n <= 10; n++) {
  console.log('Current number: ', n);
}*/

// 1. Generate a random secret number
// 2. Declare a variable to hold the player's guess
// 3. Loop while the player's guess is not correct
  // 3.1. Prompt for the player's guess
  // 3.2. Convert the player's input into a number
  // 3.3. If the guess is lower or higher than the secret 
  //      number, print a message that informs the player as such
// 4. Print a message congratulating the player

let number = Math.floor(Math.random()*20);
let guess;
while (guess !== number) {
  guess = prompt('guess a number')
  guess = parseInt(guess)
  if (guess < number) {
    console.log('your guess is too low');
  }
  if (guess > number) {
    console.log('your guess is too high');
  }
}
console.log('You did it');

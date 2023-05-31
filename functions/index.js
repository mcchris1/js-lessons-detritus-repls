// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
  const maxOfThree = function(x,y,z) {
    if (x>=y && x>=z){
      return x;
    }
    else if (y>=x && y>=z){
      return y;
    }
    else {
      return z;
    }
  }
  console.log(maxOfThree(7,7,7));
  
  // 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
  function isCharAVowel(x){
    if(x === "a"||"e"||"i"||"o"||"u"||"A"||"E"||"I"||"O"||"U"){
      return true;
    }
    else{
      return false;
    }
  }
  console.log(isCharAVowel('U'));
  
  // 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
  const sumArray = function(arr){
    let sum = 0;
    arr.forEach(function(n){
      sum += n;
    });
    return sum;
  }
  console.log(sumArray([252,4225,234]));
  
  // 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
  function multiplyArray(arr){
    let product = 1;
    arr.forEach(function(n){
      product *= n;
    });
    return product;
  }
  console.log(multiplyArray([3,2,4]));
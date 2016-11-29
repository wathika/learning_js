//1. How would you check if a number is an integer?

function isInt(num) {
  return num % 1 === 0;
}

//2. What will the following code output?
(function() {
  var a = b = 5;
})();

console.log(b);

//Output will be 5.

//3. Write a function that will allow you to do this?
//multiple(5)(6);

function multiply(x) {
  return function(y) { return x * y; };
}

//4. When would you use the bind function?


//5. What does "use strict" do?


//6. What is the difference between == and ===?


//7. How would you add your own method to the Array object so the following code would work?
var arr = [1, 2, 3, 4, 5];
var avg = arr.average();
console.log(avg);

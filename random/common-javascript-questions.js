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
        // use strict helps to write more safe code by throwing an error
	      // when a new global variable is created

//6. What is the difference between == and ===?
      //== is used in comparison but performs type conversion so it might pass some as true
      //=== strict comparison without type conversion and checks that they are of the same type

//7. How would you add your own method to the Array object so the following code would work?
var arr = [1, 2, 3, 4, 5];
var avg = arr.average();
console.log(avg);

//8. Explain what a callback function is and provide a simple example.

//9. What will the following code output?
0.1 + 0.2 === 0.3
//Output = false

//10.How would you create a private variable in JavaScript?
      //private variables are variables declared inside a function and can not be accessed outside the function
      //to access the variable, you need a helper function that returns the variable
      //the helper function makes the function a closure

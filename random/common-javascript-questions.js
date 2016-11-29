1. How would you check if a number is an integer?

function isInt(num) {
  return num % 1 === 0;
}

2. What will the following code output?
(function() {
  var a = b = 5;
})();

console.log(b);

Output will be 5.

//3 COMMON JAVASCRIPT CLOSURES


//1. What will the following code output?
for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
}


//2. Write a function that would allow you to do this.
//var addSix = createBase(6);
//addSix(10); // returns 16
//addSix(21); // returns 27

function createBase(n) {
	return function (x) {
        return n+x;
    }
}
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27



//3. How would you use a closure to create a private counter?

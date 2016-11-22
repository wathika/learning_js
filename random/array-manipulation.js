//(1) Create an array of numbers and save the array to a variable
//(2) Iterate through the array using a loop
//(3) Create a function that will multiply each number in the array by two
//(4) Pass each number in the array to this function
//(5) Save the original numbers and the doubled results as key-value pairs in an object

var arr = [6,7,8,9];
var result = {};

function byTwo(n){
    return n*2;
};


for(i=0; i<arr.length; i++){
    var n = arr[i];
    result[n] = byTwo(n);
};

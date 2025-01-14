const add = function(num1,num2) {
  return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((sum, number) => (sum+number),0);
};

const multiply = function(arr) {
  return arr.reduce((product,number) => (product*number),1);
};

const power = function(num, exponent) {
  // return num**exponent;
	return Math.pow(num,exponent);
};

const factorial = function(num) {
  // if (num === 0 || num === 1){
  //   return 1;
  // }
  // for(let i = num-1; i>=1; i--){
  //   num*=i;
  // }
  // return num;
  let numArray = [];
  for (let i = num; i >= 1; i--){
    numArray.push(i);
  }
  numArray.reduce((product, number) => {return product*number},1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((pre, curr) => pre + curr, 0)
};

const multiply = function(arr) {
  return arr.reduce((pre, curr) => pre * curr, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	let arr = [];
  for (let i = number; i >= 1; i--) {
    arr.push(i);
  }
  return arr.reduce((pre, curr) => pre * curr, 1)
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

// Extercise 1: Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100
const is100 = (num1, num2) => num1 === 100 || num2 === 100 || num1 + num2 === 100;

console.log(is100(100, 0)); // true
console.log(is100(0, 100)); // true
console.log(is100(50, 50)); // true
console.log(is100(0, 0)); // false
console.log(is100(100, 100)); // false
console.log(is100(50, 51)); // false
console.log(is100(99, 1)); // true
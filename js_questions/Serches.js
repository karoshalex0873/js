// performing a search by

// use of find method
// it return First mathing
const fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "Melon",
  "Mango",
  "Orange",
];
const searchResults = fruits.find((fruit) => fruit.startsWith("M"));
console.log(searchResults);

// exmple two
// return first Number less greater than 25
const Numbers=[10,20,30,40,50]
const resultsNumber = Numbers.find((value => value >25))
console.log(resultsNumber)
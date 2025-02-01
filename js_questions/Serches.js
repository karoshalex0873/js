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



// Searching Through an Array Using
const fruit2= [
  "apple",
  "banana",
  "cherry",
  "date",
  "Melon",
  "mango",
  "Orange",
];
const searchFruits2 = fruits.filter((fruit) => fruit.toLowerCase().includes("m"));
console.log(`${searchFruits2}`);

// using Array of objects
const People = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 }
];

const olderThan30 = People.filter((person => person.age >= 30))
const olderThan30Names=olderThan30.map((person => person.name))
console.log(`The following people has the age of of 30 and above;  ${olderThan30Names}`)
// arryays in javascript

const Fruits = [];
Fruits.push("Apple", "banana", "mango", "orange");
Fruits[4] = "pineapple";
console.log(`${Fruits[4]} is added to the array of fruits`);
console.log(`The Number of fruits  in the store are ${Fruits.length}`);
console.log(`Here is the list of the fruits in the store:  ${Fruits}`);

Fruits.length = 10;
// reverse  array method implemented
Fruits.reverse();
console.log(Fruits);

// slice array method
const Animals = [];
Animals.push("Rhino", "Elephant", "Lion", "Zebra", "Cheater", "Tiger");
console.log(Animals);
console.log(Animals.slice(2)); //romving fisrt to elements
console.log(Animals.slice(2, 4));

// filter method
const numbers = [1, 2, 3, 4, 5, 6, 7, 2, 9, 10];
const filteredNumbers = numbers.filter((num) => num < 5);
console.log(filteredNumbers);

// cheking in Animals is wildanimal or not

const Animals1 = [
  {
    name: "Rhino",
    wildAnimal: true,
  },
  {
    name: "Elephant",
    wildAnimal: true,
  },
  {
    name: "Lion",
    wildAnimal: true,
  },
  {
    name: "Zebra",
    wildAnimal: true,
  },
  {
    name: "Cheater",
    wildAnimal: true,
  },
  {
    name: "Tiger",
    wildAnimal: true,
  },
  {
    name: "Dog",
    wildAnimal: false,
  },
  {
    name: "Cat",
    wildAnimal: false,
  },
  {
    name: "Cow",
    wildAnimal: false,
  },
  {
    name: "Goat",
    wildAnimal: false,
  },
];
const wildAnimals = Animals1.filter((animal) => animal.wildAnimal === true);
console.log(wildAnimals);
const wildAnimalsNames = wildAnimals.map((animal) => animal.name);
console.log(`The wild animals are ${wildAnimalsNames}`);
const domesticAnimals=Animals1.filter((animal) => animal.wildAnimal === false);
const domesticAnimalsNames =domesticAnimals.map((animal) => animal.name)
console.log(`the list of domestic animal:${domesticAnimalsNames}`)
// sorted animal list
const sortedAnimal = domesticAnimals.map((animal) =>animal.name).sort()
console.log(`sorted animal list ${sortedAnimal}`)

// sorting the list of animals name in ascending order

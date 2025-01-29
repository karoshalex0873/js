const Person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  country: "Kenya",
  city: "Nairobi",
  getPersonInfo: function () {
    return `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old. I live in ${this.city}, ${this.country}.`;
  },
};

console.log(Person.getPersonInfo());

const Car ={
  name: "Audi",
  model: "A4",
  year: 2020,
  colour: "Black",
  getPrice: function(){
    return `The price of the ${this.name} ${this.model} is $50,000`;
  },
}
console.log(Car.getPrice());
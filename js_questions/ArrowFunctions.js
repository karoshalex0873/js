// Arrow function Extercise 1: Write a JavaScript program to verify the age of a person and display the message "You are eligible to vote" if the age is greater than or equal to 18, otherwise display the message "You are not eligible to vote".
 
const isEligibaleToVote = (age) => age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
console.log(isEligibaleToVote(15)); // You are eligible to vote
console.log(isEligibaleToVote(18)); // You are eligible to vote

// Exrerise 2: Write a JavaScript program to check if a number is even or odd using arrow function.

const isEvenOrOdd = (num) => num %2 ===0 ? "Even" : "Odd";
console.log(isEvenOrOdd(14)); // Even
console.log(isEvenOrOdd(15)); // Odd
// Extersice 3: Write a JavaScript program to check if a number is a multiple of 5 using arrow function.

const isMultipleOf5 =(num) => num % 5 === 0 ? "Multiple of 5" : "Not a multiple of 5";
console.log(isMultipleOf5(15)); // Multiple of 5
console.log(isMultipleOf5(14)); // Not a multiple of 5

// Extersice 4: Write a JavaScript program to check if a number is a multiple of 3 and 5 using arrow function.
const isMultipleOf3And5 = (num) => num % 3 === 0 && num % 5 === 0 ? "Multiple of 3 and 5" : "Not a multiple of 3 and 5";
console.log(isMultipleOf3And5(15)); // Multiple of 3 and 5
console.log(isMultipleOf3And5(14)); // Not a multiple of 3 and 5

// Extersice 5: Write a JavaScript program to check if a number is a multiple of 3 or 7 using arrow function.
const isMultipleOf3Or7 = (num) => num % 3 === 0 || num % 7 === 0 ? "Multiple of 3 or 7" : "not a multiple of 3 or 7";
console.log(isMultipleOf3Or7(14)); // Multiple of 3 or 7
console.log(isMultipleOf3Or7(13))

// Extersice 6: Write a JavaScript program to check if a number is a multiple of 3, 7 or 11 using arrow function.

const isMultipleOf3Or7Or11 = (num) => num % 3 === 0 || num % 7 === 0 || num % 11 === 0 ? "Multiple of 3, 7 or 11" : "Not a multiple of 3, 7 or 11";
console.log(isMultipleOf3Or7Or11(21)); // Multiple of 3, 7 or 11
console.log(isMultipleOf3Or7Or11(13)); // Not a multiple of 3, 7 or 11

// Extersice 7: Grading system at university is as follows: 
// - 0 to 39- E
// - 40 to 49 - D
// - 50 to 59 - C
// - 60 to  69- B
// - Above 70 - A
// Write a JavaScript program to check the grade of a student using arrow function.

const getGrade = (marks) => {
    if(marks >= 0 && marks <= 39){
        return "E";
    }
    else if(marks >= 40 && marks <= 49){
        return "D";
    }
    else if(marks >= 50 && marks <= 59){
        return "C";
    }
    else if(marks >= 60 && marks <= 69){
        return "B";
    }
    else if(marks >= 70){
        return "A";
    }
    else{
        return "Invalid Marks";
    }
}
console.log(getGrade(35)); // E
console.log(getGrade(45)); // D
console.log(getGrade(55)); // C
console.log(getGrade(65)); // B
console.log(getGrade(75)); // A
console.log(getGrade(80)); // A
console.log(getGrade(-5)); // Invalid Marks

// Extersice 8: Write a JavaScript program to check if a number is a positive number using arrow function.
const isPositive = (num) => num > 0 ? "Positive" : "Negative";
console.log(isPositive(5)); // Positive
console.log(isPositive(-5)); // Negative

// Extersice 9: Write a JavaScript program to check if a number is a negative number using arrow function.
const isNegative = (num) => num < 0 ? "Negative" : "Positive";
console.log(isNegative(5)); // Positive
console.log(isNegative(-5)); // Negative

// Extersice 10: Write a JavaScript program to check if a number is a prime number using arrow function.
const isPrime = (num) => {
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return "Not a Prime Number";
        }
    }
    return "Prime Number";
}
console.log(isPrime(5)); // Prime Number
console.log(isPrime(6)); // Not a Prime Number
console.log(isPrime(7)); // Prime Number
console.log(isPrime(8)); // Not a Prime Number
console.log(isPrime(9)); // Not a Prime Number
console.log(isPrime(2)); // Prime Number
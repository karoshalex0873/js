// Extercise 1: Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

let Num1 =80;
let Num2 = 10;
if (Num1 ===100){
    console.log("first number is 100");
}
else if(Num2 === 100){
    console.log("second number is 100");
}
else if(Num1 + Num2 === 100){
    console.log("Sum of Both numbers is 100");
}
else{
    console.log("None of them are 100");
}

// Extercise 2: Write a JavaScript program to get the extension of a filename
let filename = "index.html";
let extension = filename.split('.').pop();
console.log(extension);

// Exterscise 3: Write a JavaScript program to replace every character in a given string with the character following it in the alphabet using arrow functiom
const replaceChar = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
console.log(replaceChar('abcd'));

// Exterscise 4: Write a JavaScript program to get the current date using arrow function
const formatdate = (date = new Date()) => {
    const days = date.getDate();
    const month = date.getMonth()+1; 
    const year = date.getFullYear();
    return `${days}/${month}/${year}`;
}
console.log(formatdate());

// Exterscise 5: Write a JavaScript program to calculate the area of a triangle using arrow function\
const areaOfTriangle =(base,height)=>{
  Area=0.5*base*height;
  return Area
}
console.log(areaOfTriangle(5,20))

// Exterscise 6: Write a JavaScript program to create a new array out of the two given arrays using arrow function
const mergeArray =(arr1,arr2) =>{
   newarray = arr1.concat(arr2);
    return newarray;
}
console.log(mergeArray([1,2,3],[4,5,6]));

// Exterscise 7: Write a JavaScript program to remove a specific element from an array using arrow function
const removeArry =(arr,element) =>{
  removedelement = arr.filter(num => num !== element);
  return removedelement;
}
console.log(removeArry([1,2,3,4,5],3));

// Exterscise 8: Write a JavaScript program to get the maximum value of an array, after mapping each element to a value using arrow function
const maximumArray =(arr)  =>{
  max=Math.max(...arr);
  return max;
}
console.log(maximumArray([1,2,3,6,5]));

// Exterscise 9: Write a JavaScript program to get the sum of the values in an array after mapping each element to a value using arrow function
const sumArray =(arr) =>{
  sum=arr.reduce((a,b) => a+b,0);
  return sum;
}
console.log(sumArray([1,2,3,4,5]));

// Exterscise 10: Write a JavaScript program to return numbers in array that are less than 5 in an array of 0-10 using arrow function
const lessThan5 =(arr) =>{
  finalOutput = arr.filter(num=>num<5);
  return finalOutput
}
console.log(lessThan5([1,2,3,4,5,6,7,8,9,10]))

// Exterscise 11: Write a JavaScript program to check whether a string is blank or not using arrow function
const isBlank = (str) => str.length === 0? "String is blank" : "String is not blank";
console.log(isBlank(`1`)); // String is blank

// Exterscise 12: Write a JavaScript program to split a string and convert it into an array of words using arrow function
const stringToArray =(myString) =>{
  let words = myString.split(' ');
  return words;
}
console.log(stringToArray("I am learning JavaScript"));

// Exterscise 13: Write a JavaScript program to print my name and age  after timeout using arrow function
const printNameAge =(name,age)=>`My name is ${name}. I am ${age} years old.`;
setTimeout(()=>console.log(printNameAge("Ayesha", 25)),5000);

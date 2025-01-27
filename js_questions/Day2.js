// Array in javascript is a global object used to store multiple values in a single variable. It is a collection of elements that can be of different types. The length of an array is not fixed, it can grow or shrink as needed. The elements in an array can be accessed using their index.

// // Exterscise 13: Write a JavaScript program to find the most frequent item of an array using arrow function
const mostFrequentItem = (arr) => {
  let mf = 1;
  let m = 0;
  let item;
  for (let i=0; i<arr.length; i++)
  {
          for (let j=i; j<arr.length; j++)
          {
                  if (arr[i] == arr[j])
                  m++;
                  if (mf<m)
                  {
                          mf=m; 
                          item = arr[i];
                  }
          }
          m=0;
  }
  return item;
}
console.log(mostFrequentItem([3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4])); // 4

// // Exterscise 14: Write a JavaScript program to flatten a nested (any depth) array using arrow function

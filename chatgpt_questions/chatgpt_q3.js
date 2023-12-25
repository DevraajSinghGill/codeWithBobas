/* Q3: Given an array of strings, convert each string 
 to uppercase and then filter out strings that contain the letter 'A'. Use method chaining with map and filter. */

const strings = ["apple", "banana", "Orange", "grape", "kiwi"];

const filteredUppercaseStrings = strings
  .map(str => str.toUpperCase()) // Convert each string to uppercase
  .filter(str => !str.includes('I')); 

console.log(filteredUppercaseStrings);

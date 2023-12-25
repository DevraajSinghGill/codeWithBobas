/* Q1: Create a function that takes an array of 
numbers and returns a new array where each 
number is doubled. Use map higher-order function 
to achieve this. Then, filter the resulting array to 
only include numbers greater than 10.

*/

function doubleAndFilterGreaterThanTen(numbers) {
    const doubledNumbers = numbers.map(num => num * 2);
  
    const result = doubledNumbers.filter(num => num > 10);
  
    return result;
}
  
  const numbersArray = [3, 7, 12, 5, 9, 15];
  const modifiedNumbers = doubleAndFilterGreaterThanTen(numbersArray);
  console.log(modifiedNumbers); 
  
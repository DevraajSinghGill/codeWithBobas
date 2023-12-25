/* Q2: Write a function that uses the reduce higher-order function 
to find the maximum number in an array of numbers. */

function findMax(numbers) {
    if (numbers.length === 0) {
      return undefined; 
    }
  

    const max = numbers.reduce((currentMax, currentValue) => {
      return currentValue > currentMax ? currentValue : currentMax;
    }, numbers[0]); 
  
    return max;
}
  const numbersArray = [3, 7, 2, 9, 4, 11, 15];
  const maxNumber = findMax(numbersArray);
  console.log("The maximum number is:", maxNumber);
  
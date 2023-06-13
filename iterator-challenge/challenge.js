// Return a new array with all the names capitalized

const names_lowerCase = ["tom", "jerry", "donald", "sylvester"];
let output = names_lowerCase.map(name => name.toUpperCase());
console.log(names_lowerCase);
console.log(output);

// Return a new array with all the numbers decremented by 5

const numbers_original = ["1", "2", "3", "4", "5"];
let outputNumbers = numbers_original.map(number => number - 5);
console.log(numbers_original);
console.log(outputNumbers);
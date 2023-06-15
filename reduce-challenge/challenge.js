// given an array of character codes, convert the codes to letters and reduce it to a single string
const arrOfCodes = [114, 101, 100, 117, 99, 101];

const letterString = arrOfCodes.reduce((previousValue, currentValue) => {
    console.log(
        `Previous value: ${previousValue}, current value: ${currentValue}`
    );
    return previousValue + String.fromCharCode(currentValue);
}, '');

console.log(letterString);

// given an array of letters, reduce them to get the sum of character codes
const lettArr = ['c', 'h', 'e', 'e', 's', 'e'];

const codeSum = lettArr.reduce((previousValue, currentValue) => {
    console.log(
        `Previous value: ${previousValue}, current value: ${currentValue}`
    );
    return (previousValue + currentValue.charCodeAt());
}, 0);

console.log(codeSum);

// use reduce to filter an array to only get numbers greater than 10

const numsArr = [1, 345, 545, 2, 5, 7, 907];

const greaterThan10 = numsArr.reduce((previousValue, currentValue) => {
    console.log(
        `Previous value: ${previousValue}, current value: ${currentValue}`
    );
    if (currentValue > 10) {
        previousValue.push(currentValue);
    }
    return previousValue;
}, []);

console.log(greaterThan10);

// use reduce to create an array of numbers (use numsArr) to the power of 2

const arraySquared = numsArr.reduce((previousValue, currentValue) => {
    console.log(
        `Previous value: ${previousValue}, current value: ${currentValue}`
    );
    previousValue.push(currentValue ** 2);
    return previousValue;
}, []);

console.log(arraySquared);
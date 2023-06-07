/*----------  Function Declaration  ----------*/

const moonOrbits = function (earthDays) {
    const moonOrbitPeriod = 27;

    const totalOrbits = earthDays / moonOrbitPeriod;

    // if (earthDays % moonOrbitPeriod === 0) return totalOrbits;
    // else return totalOrbits.toFixed(3);

    return earthDays % moonOrbitPeriod === 0 ? totalOrbits : parseFloat(totalOrbits.toFixed(3));

}

const circleArea = function (radius) {
    return (Math.PI * radius ** 2).toFixed(2);
}

const circlePerimeter = function (radius) {
    return (2 * Math.PI * radius).toFixed(2);
}

const ageInDays = function (age) {
    return age * 365;
}

const ageInSeconds = function (age) {
    return age * 31536000;
}

const remainder = function (numberOne, numberTwo) {
    return numberOne % numberTwo;
}

const basketballPointsTotal = function (twoPointers, threePointers) {
    return twoPointers * 2 + threePointers * 3;
}

const lessThan100 = function (numberOne, numberTwo) {
    return numberOne + numberTwo < 100 ? true : false;
}

/*----------  Variable Declaration  ----------*/

let r = 5;
let earthDays = 54;
let myAge = 22;

let n1 = 24;
let n2 = 5;

let twoPointers = 5;
let threePointers = 2;

let n3 = 75;
let n4 = 24;


// /*----------  Script assignment  ----------*/


console.log(`The moon will orbit around the earth around ${moonOrbits(earthDays)} times in ${earthDays} days.`);

console.log(`The circle's radius is ${r}, so its area is about ${circleArea(r)} and its perimeter is about ${circlePerimeter(r)}.`);

console.log(`You're ${myAge} years old, so that means you're ${ageInDays(myAge)} days old and ${ageInSeconds(myAge)} seconds old.`);

console.log(`If you divide ${n1} by ${n2}, you'll get ${remainder(n1, n2)} as a remainder.`);

console.log(`Your team scored ${twoPointers} two-pointers and ${threePointers} three-pointers, netting you a total of ${basketballPointsTotal(twoPointers, threePointers)} points.`);

console.log(`Is the sum of ${n3} and ${n4} less than 100? It equals ${n3 + n4}, so ${lessThan100(n3, n4)}.`);
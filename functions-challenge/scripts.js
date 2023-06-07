/*----------  Function Declaration  ----------*/

const moonOrbits = function (earthDays) {
    const moonOrbitPeriod = 27;

    const totalOrbits = earthDays / moonOrbitPeriod;

    // if (earthDays % moonOrbitPeriod === 0) return totalOrbits;
    // else return totalOrbits.toFixed(3);

    return earthDays % moonOrbitPeriod === 0 ? totalOrbits : totalOrbits.toFixed(3);

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

/*----------  Variable Declaration  ----------*/

let r = 5;
let earthDays = 54;
let myAge = 22;

let n1 = 24;
let n2 = 5;


/*----------  Script assignment  ----------*/


console.log(`The moon will orbit around the earth around ${moonOrbits(earthDays)} times in ${earthDays} days.`);

console.log(`The circle's radius is ${r}, so its area is about ${circleArea(r)} and its perimeter is about ${circlePerimeter(r)}.`);

console.log(`You're ${myAge} years old, so that means you're ${ageInDays(myAge)} days old and ${ageInSeconds(myAge)} seconds old.`);

console.log(`If you divide ${n1} by ${n2}, you'll get ${remainder(n1, n2)} as a remainder.`);
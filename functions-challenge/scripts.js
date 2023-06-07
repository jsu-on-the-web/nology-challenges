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

/*----------  Variable Declaration  ----------*/

let r = 5;
let earthDays = 55;


/*----------  Script assignment  ----------*/


console.log(`The moon will orbit around the earth around ${moonOrbits(earthDays)} times in ${earthDays} days.`);

console.log(`The circle's area is about ${circleArea(r)} and its perimeter is about ${circlePerimeter(r)}.`);
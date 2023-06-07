/*----------  Function Declaration  ----------*/

const moonOrbits = function (earthDays) {
    const moonOrbitPeriod = 27;
    return (earthDays / moonOrbitPeriod).toFixed(3);
}


/*----------  Variable Declaration  ----------*/




/*----------  Script assignment  ----------*/


console.log(moonOrbits(54));
console.log(moonOrbits(365));
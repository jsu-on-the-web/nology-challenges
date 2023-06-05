/*----------  Function Declaration  ----------*/



/*----------  Variable Declaration  ----------*/

let age = 22;
let earthDays = 365;
let moonRotationPeriod = 27;
let moonRotationsInEarthDays = earthDays / moonRotationPeriod;

/*----------  Script assignment  ----------*/

age += 10;
console.log(`${age}`);

age -= 7;
console.log(`${age}`);

age *= 11;
console.log(`${age}`);


// Calculating Moon Rotations --------------------------------
console.log(`The moon will complete ${moonRotationsInEarthDays} rotations in ${earthDays} days`);
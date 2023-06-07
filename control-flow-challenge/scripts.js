
/*----------  Function Declaration  ----------*/



/*----------  Variable Declaration  ----------*/

let x = 1;
let y = 2;

let userInput = prompt('Please enter some input');

let day = 3;

let parent1 = { eyeColour: 'green' };
let parent2 = { eyeColour: 'brown' };
let parentEyecolours = parent1.eyeColour + parent2.eyeColour;
let child = { eyeColour: '' };
let blueChance = 0;
let greenChance = 0;
let brownChance = 0;

/*----------  Script assignment  ----------*/

// Challenge 1
if (x < y) {
    console.log("x is smaller than y");
} else if (x > y) {
    console.log("x is greater than y");
} else {
    console.log("x is equal to y");
}

// Challenge 2 
if (parseFloat(userInput) !== NaN || parseInt(userInput) !== NaN) {
    console.log(`The input squared is ${userInput ** 2}`);
} else if (typeof userInput === 'string') {
    console.log(`The input is ${userInput}`);
} else {
    console.log("Invalid input");
}


//Challenge 3 
switch (day) {
    case 1:
        console.log(`Today is Monday`);
        break;
    case 2:
        console.log(`Today is Tuesday`);
        break;
    case 3:
        console.log(`Today is Wednesday`);
        break;
    case 4:
        console.log(`Today is Thursday`);
        break;
    case 5:
        console.log(`Today is Friday`);
        break;
    case 6:
        console.log(`Today is Saturday`);
        break;
    case 7:
        console.log(`Today is Sunday`);
        break;
    default:
        console.log(`Unknown day`);
        break;
}

// Challenge 4

parentEyecolours = parentEyecolours.toLowerCase();

switch (parentEyecolours) {
    case "brownbrown":
        brownChance = 75;
        greenChance = 18.8;
        blueChance = 6.3;
        break;
    case "brownblue":
    case "brownblue":
        brownChance = 50;
        greenChance = 0;
        blueChance = 50;
        break;
    case "browngreen":
    case "greenbrown":
        brownChance = 50;
        greenChance = 37.5;
        blueChance = 12.5;
        break;
    case "bluegreen":
    case "greenblue":
        brownChance = 0;
        greenChance = 50;
        blueChance = 50;
        break;
    case "greengreen":
        brownChance = 0;
        greenChance = 75;
        blueChance = 25;
        break;
    case "blueblue":
        brownChance = 0;
        greenChance = 1;
        blueChance = 99;
        break;
}

console.log(`You and your partner have ${parent1.eyeColour} and ${parent2.eyeColour} eyes. So your child will have a ${blueChance}% chance of having blue eyes, a ${greenChance}% chance of having green eyes, and a ${brownChance}% chance of having brown eyes.`);

// child.eyeColour = Math.random() * 100; // Random number between 0 and 100, excluding 100.

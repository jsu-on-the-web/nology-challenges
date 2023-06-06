
/*----------  Function Declaration  ----------*/



/*----------  Variable Declaration  ----------*/

let x = 1;
let y = 2;

let userInput = prompt('Please enter some input');

let day = 3;

let parent1 = { eyeColour: 'green' };
let parent2 = { eyeColour: 'brown' };

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

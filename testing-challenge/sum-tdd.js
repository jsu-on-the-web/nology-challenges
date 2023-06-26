// A function that calculates the sum of numbers

// It should throw an error if one or more parameters are not a number

// if no parameters are passed -> thor an error

// I want it to sum any number of arguments <= 1

export const sum = (...args) => {
    // First check: Are there any arguments?
    if (args.length === 0) {
        throw new Error("No arguments passed");
    }

    //Second check: Are there any arguments that are not numbers?
    let argTypeCheck = args.filter(curr => typeof curr !== "number").length;
    if (argTypeCheck > 0) {
        throw new Error("One or more arguments is not a number");
    }

    // Actually summing the arguments up
    let result = args.reduce((acc, curr) => {
        return acc + curr;
    });

    console.log(`${args} summed up is ${result}`)

    return result;
};

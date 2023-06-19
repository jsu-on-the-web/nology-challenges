// Swap keys with values

const translate = {
    apple: "jablko",
    pear: "gruszka",
    strawberry: "truskawka",
};

function flipKeysAndValues(obj) {
    const entries = Object.entries(obj);
    const flippedEntries = entries.map(entry => entry.reverse());
    const output = Object.fromEntries(flippedEntries);
    return output;
}

console.log(translate);
console.log(flipKeysAndValues(translate));

/* const newObj = {
    jablko: "apple",
    gruszka: "pear",
    truskawka: "strawberry"
} */

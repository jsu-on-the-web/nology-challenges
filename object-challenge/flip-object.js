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

// Alt 
const swapKeys = (obj) => {
    const keyArr = Object.keys(obj)
    const valueArr = Object.values(obj)

    return valueArr.reduce((result, value, index) => {
        result[value] = keyArr[index]
        return result
    }, {})
};

/* const newObj = {
    jablko: "apple",
    gruszka: "pear",
    truskawka: "strawberry"
} */

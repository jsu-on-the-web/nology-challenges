const delayedIncDec = (n, mode, delay = 2500) => {
    console.log(`n is ${n}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mode === "inc") {
                n++;
                resolve(`Incremented to ${n}`);
            } else if (mode === "dec") {
                n--;
                resolve(`Decremented to ${n}`);
            } else {
                reject(`Invalid mode ${mode}`);
            }
        }, delay);
    })
}


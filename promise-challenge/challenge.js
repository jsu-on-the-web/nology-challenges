const delayedIncDec = (n, mode, delay = 2500) => {
    console.log(`n is ${n}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mode === "inc") {
                n++;
                resolve(`Incremented to ${n} after ${delay}ms`);
            } else if (mode === "dec") {
                n--;
                resolve(`Decremented to ${n} after ${delay}ms`);
            } else {
                reject(`Invalid mode: ${mode}`);
            }
        }, delay);
    })
}

delayedIncDec(5, "inc", 1000).then((value) => { console.log(value) }).catch(err => { console.log(err) });
delayedIncDec(20, "dec", 3000).then((value) => { console.log(value) }).catch(err => { console.log(err) });
delayedIncDec(520, "inc").then((value) => { console.log(value) }).catch(err => { console.log(err) });

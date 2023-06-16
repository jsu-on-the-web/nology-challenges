/*----------  Function Declaration  ----------*/
const pubCheck = function (age, country, drunkLevel) {
    let canEnterPub = false;
    message.hidden = true;
    message.classList.remove(['message--success', 'message--failure']);

    // First is the country check since different countries have different drinking ages
    switch (country) {
        // Australia, UK, and Poland share the same drinking age, so we can stack their cases
        case "Australia":
        case "UK":
        case "Poland":
            if (age >= 18 && drunkLevel <= 3) canEnterPub = true;
            break;

        case "USA":
            if (age >= 21 && drunkLevel <= 3) canEnterPub = true;
            break;
        default:
            console.error("Unknown country");
            break;
    }

    // Message to show check
    if (document.querySelector("#age").nodeValue === null && document.querySelector("#drunk").nodeValue === null) {
        btn.style.backgroundColor = "#ffbd4a";
        beerBottle.src = "assets/beer.svg";
        message.hidden = true;
        return;
    }
    if (canEnterPub === true) {
        beerBottle.src = "assets/green_beer.svg";
        btn.style.backgroundColor = "#008000";
        message.classList.add("message--success");
        message.innerHTML = "Come in and have a beer";
        message.hidden = false;
    } else {
        message.innerHTML = "You can't have a beer";
        btn.style.backgroundColor = "#b40f0f";
        message.classList.add("message--failure");
        beerBottle.src = "assets/red_beer.svg";
        message.hidden = false;
    }

    return canEnterPub;
}




/*----------  Variable Declaration  ----------*/
let message = document.getElementById("message");
let btn = document.getElementById("btn");
let beerBottle = document.querySelector("img");

/*----------  Script assignment  ----------*/
btn.addEventListener("submit", pubCheck(document.querySelector("#age").nodeValue, document.querySelector("#country").value, document.querySelector("#drunk").nodeValue));




/*----------  Function Declaration  ----------*/
const pubCheck = function (age, country, drunkLevel) {
    let canEnterPub = false;

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

    return canEnterPub;
}




/*----------  Variable Declaration  ----------*/



/*----------  Script assignment  ----------*/




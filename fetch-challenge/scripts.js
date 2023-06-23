const COUNTRY_URL = "https://restcountries.com/";

async function fetchCountry(countryName) {
    const response = await fetch(`${COUNTRY_URL}v3.1/name/${countryName}`);
    const information = await response.json();
    console.log(information);
    // Getting only the data we want to display 
    const cleaninfo = information.data.map((country) => {
        const { name, currencies, capital, region } = country;
        const { common, official } = name;
        const { name, symbol } = currencies;
    })
}

fetchCountry("australia");
fetchCountry("aaaaaaaaaaaaaaaaaaaaaaaaaaa");
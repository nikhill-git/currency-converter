const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"

const getdata = async() => {
    let response = await fetch(url);
    console.log(response);

    let finalData = await response.json();
    console.log(finalData);
}




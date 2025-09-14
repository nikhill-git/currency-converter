const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");



//Adding country List to the (select options)

for(let select of dropdowns) {    //select dropdowns
    for( currCode in countryList) {    //country list
        let newOption = document.createElement("option");   //createing a new option
        newOption.innerText = currCode;                     //these three lines of code actually does is
        newOption.value = currCode;                 /*    <option value = "currCode"> currCode <option>   */
        
       if(select.name === "from" && newOption.innerText === "USD"){
        newOption.selected = "selected";
       }
       //Selecting USD & INR in the first
        else if(select.name === "to" && newOption.innerText === "INR"){
        newOption.selected = "selected";
       }

        select.append(newOption);
        //adds this option in the (select dropdown)
    }

    select.addEventListener("change", (evt) =>{
        updateFlag(evt.target);//targets the changed option
        //And also passes the changed option
    });
}


const updateFlag = (option) => {
    let currCode = option.value; //value of the changed option.   (<option value = "XYZ"> <option>)
    let countryCode = countryList[currCode]; //we are using country code coz, we'e going to change the flag icon using country code
    
    let  newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    //Changing the country flag according to the select option.

    //Accessing and adding the img using the select option.
    let img = option.parentElement.querySelector("img");
    img.src = newSrc;
}



const btn = document.querySelector("form button");

const fromCurr = document.querySelector(".from select");
const toCurr= document.querySelector(".to select");
const msg = document.querySelector(".msg");

btn.addEventListener("click", async (evt) =>{
    evt.preventDefault();//no action will be done when we click on the summit button.

    let amount = document.querySelector(".amount input");
    amtVal = amount.value;
    if (amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    
    let finalAmount = amtVal * rate;
    
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});





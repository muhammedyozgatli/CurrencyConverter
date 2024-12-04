const api_key = "ad85d7b25925143bc5d2e1e4";
const url = "https://v6.exchangerate-api.com/v6/" + api_key;

const currency_one = document.getElementById("currency_one");
const currency_two = document.getElementById("currency_two");
const list_one = document.getElementById("list_one");
const list_two = document.getElementById("list_two");
const amount_one = document.getElementById("amount_one");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

// Fetch exchange rates and update DOM
fetch(url + "/codes")
    .then(res => res.json())
    .then(data => {
        const items = data.supported_codes;

        let options;
        for(let item of items) {
           options += `<option value=${item[0]}>${item[1]}</option>`;
        }
        list_one.innerHTML = options;
        list_two.innerHTML = options;
    });

// Event listeners
calculate.addEventListener("click", function() {
    const currency_one_value = currency_one.value;
    const currency_two_value = currency_two.value;
    const amount_value = amount.value;
    
    fetch(url + "/latest/" + currency_one_value)
        .then(res => res.json())
        .then(data => {
            const rate = (data.conversion_rates[currency_two_value]*amount_value).toFixed(2);
            result.innerHTML = `<div class="alert alert-success" role="alert">
                    Sonuç: ${amount_value} ${currency_one_value} = ${rate} ${currency_two_value}
                </div>`;
        });
        
});
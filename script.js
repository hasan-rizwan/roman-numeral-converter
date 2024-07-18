// DOM Elements

const converter = document.getElementById('converter');
const converterInput = document.getElementById('converter__input');
const output = document.getElementById('output');

const romanSymbolObj = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1,
};

const decimalToRoman = (input) => {
    let result = "";

    for (const symbol in romanSymbolObj) {

        while (input >= romanSymbolObj[symbol]) {
            result += symbol;
            input -= romanSymbolObj[symbol];
        }

    }

    displayResult(result);
}

const displayResult = (text, status) => {
    status === "alert" ? output.classList.add("output--alert") : output.classList.remove("output--alert");
    output.classList.remove('output--hidden');
    output.innerText = text;
};

const checkUserInput = (input) => {
    const regex = /[^0-9]/g;
    if (input.match(regex)) {
        displayResult("Please enter a valid number.", "alert");
        return;
    }
    else if (input < 1) {
        displayResult("Please enter a number greater than or equal to 1.", "alert");
        return;
    }
    else if (input > 3999) {
        displayResult("Please enter a number less than or equal to 3999.", "alert");
        return;
    }

    decimalToRoman(input);
}

converter.addEventListener('submit', (e) => {
    e.preventDefault();
    checkUserInput(converterInput.value);
});
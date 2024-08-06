let amount, rate, years;


let result = 0;

let yearlyResults = [];


function calculateInvestment() {
    
    amount = parseFloat(document.getElementById('amount').value);
    rate = parseFloat(document.getElementById('rate').value);
    years = parseInt(document.getElementById('years').value);
    
    
    if (isNaN(amount) || isNaN(rate) || isNaN(years)) {
        document.getElementById('result').textContent = "Por favor, ingrese valores válidos.";
        return;
    }

    
    result = amount;
    yearlyResults = [];

    
    for (let i = 1; i <= years; i++) {
        result *= (1 + rate / 100);
        yearlyResults.push({ year: i, value: result });
    }

    
    displayResults();
}


function displayResults() {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = "";

    yearlyResults.forEach(yearlyResult => {
        const p = document.createElement('p');
        p.textContent = `Año ${yearlyResult.year}: $${yearlyResult.value.toFixed(2)}`;
        resultElement.appendChild(p);
    });

    const totalP = document.createElement('p');
    totalP.textContent = `Total después de ${years} años: $${result.toFixed(2)}`;
    resultElement.appendChild(totalP);
}


function findResultByYear(year) {
    return yearlyResults.find(result => result.year === year);
}


console.log(findResultByYear(2)); 

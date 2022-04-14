var inputValue = document.querySelector('#input-value');
var inputUnit = document.querySelector('#input-unit');
var outputValue = document.querySelector('#output-value');
var outputUnit = document.querySelector('#output-unit');
var outputUnitDec = document.querySelector('#output-unit-dec');
const convertBtn = document.querySelector('#convert');

var converted;

convertBtn.addEventListener('click', (e) => {
    const celsiusTemp = () => {
        if (inputUnit.value == 'c' & outputUnit.value == 'f') {
            converted = parseInt(inputValue.value) * (9 / 5) + 32;
            converted = converted.toFixed(2);
            console.log(converted);
            outputValue.innerHTML = converted;
            outputUnitDec.innerHTML = "Fahrenheit";
        };
        if (inputUnit.value == 'c' & outputUnit.value == 'k') {
            converted = parseInt(inputValue.value) + 273.15;
            converted = converted.toFixed(2);
            console.log(converted);
            outputValue.innerHTML = converted;
            outputUnitDec.innerHTML = "Kelvin";
        };
        if (inputUnit.value == 'c' & outputUnit.value == 'c') {
            converted = parseFloat(inputValue.value).toFixed(2);
            outputValue.innerHTML = converted;
            outputUnitDec.innerHTML = "Celsius";
            console.log(converted);
        };


    };

    const fahrenTemp = () => {
        if (inputUnit.value == 'f' & outputUnit.value == 'c') {
            converted = (parseInt(inputValue.value) - 32) * (5 / 9);
            converted = converted.toFixed(2);
            console.log(converted);
            outputValue.innerHTML = converted;
            outputUnitDec.innerHTML = "Celsius";
            return converted;
        };
        if (inputUnit.value == 'f' & outputUnit.value == 'k') {
            converted = (parseInt(inputValue.value) - 32) * (5 / 9) + 273.15;
            converted = converted.toFixed(2);
            console.log(converted);
            outputValue.innerHTML = converted;
            outputUnitDec.innerHTML = "Kelvin";
            return converted;
        };
        if (inputUnit.value == 'f' & outputUnit.value == 'f') {
            converted = parseFloat(inputValue.value).toFixed(2);
            outputValue.innerHTML = converted;
            outputUnitDec.innerHTML = "Fahrenheit";
            console.log(converted);
        };
    };

    const kevTemp = () => {

        if (inputUnit.value == 'k' & outputUnit.value == 'c') {
            converted = (parseInt(inputValue.value) - 273.15);            
            converted = converted.toFixed(2);
            console.log(converted);
            outputValue.innerHTML = converted;
            outputUnitDec.innerHTML = "Celsius";
            return converted;
        };
        if (inputUnit.value == 'k' & outputUnit.value == 'f') {
            converted = (parseInt(inputValue.value) - 273.15) * (9 / 5) + 32;
            converted = converted.toFixed(2);
            console.log(converted);
            outputValue.innerHTML = converted;
            outputUnitDec.innerHTML = "Fahrenheit";
            return converted;
        };
        if (inputUnit.value == 'k' & outputUnit.value == 'k') {
            converted = parseFloat(inputValue.value).toFixed(2);
            outputValue.innerHTML = converted;
            outputUnitDec.innerHTML = "Kelvin";
            console.log(converted);
        };
    };


    if (inputUnit.value == 'c') {
        celsiusTemp();
    };
    if (inputUnit.value == 'f') {
        fahrenTemp();
    };
    if (inputUnit.value == 'k') {
        kevTemp();
    };

    

});









const celsiusTemp = () => {
    if (inputUnit.value == 'c' & outputUnit.value == 'f') {
        converted = inputValue.value * (2 / 9) + 32;
        console.log(converted);
        return converted;
    };
    if (inputUnit.value == 'c' & outputUnit.value == 'k') {
        converted = inputValue.value * + 273.15;
        console.log(converted);
        return converted;
    };
};

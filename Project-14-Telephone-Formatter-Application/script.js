
const input = document.querySelector("input");

let firstThreeNumbers = "";
let previousValue = "";

input.addEventListener("input", (e) => {

    const inputValue = e.target.value.replace(/\D/g, '');

    if (inputValue.length === 4 && previousValue.length < inputValue.length) {
        firstThreeNumbers = inputValue.substring(0, 3);
        input.value = `+(${firstThreeNumbers}) - ${inputValue[inputValue.length - 1]}`;
    }

    previousValue = inputValue;

});
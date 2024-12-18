const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.querySelector("input");
    const convertedWeight = document.querySelector("span");
    let kgToPound;

    if ((isNaN(input.value)) || (input.value <= 0)) {
        convertedWeight.classList.add("error");
        convertedWeight.innerHTML = "<p>Please enter a valid weight</p>";

        setTimeout(() => {
            convertedWeight.innerHTML = "";
            convertedWeight.classList.remove("error");
        }, 2500);
        input.value = "";
    } else {
        kgToPound = Number(input.value) * 2.20462;   // equalto 1 Kg

        convertedWeight.classList.add("successful");
        convertedWeight.innerHTML = `${kgToPound.toFixed(3)}`;

        setTimeout(() => {
            convertedWeight.innerHTML = "";
            convertedWeight.classList.remove("successful");
            input.value = "";
        }, 10000);

    }
});
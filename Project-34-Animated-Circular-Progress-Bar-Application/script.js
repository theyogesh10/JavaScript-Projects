let number = document.getElementById("number");
let counter = 0;

let interval = setInterval(() => {
    if (counter == 65) {
        clearInterval(interval);
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 30);
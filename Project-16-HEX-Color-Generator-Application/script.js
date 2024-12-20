const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", updateColor);

function updateColor() {
    const colorBox = document.getElementById("color-box");
    const colorText = document.getElementById("color-text");

    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
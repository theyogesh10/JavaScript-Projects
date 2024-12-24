var selectField = document.getElementById("select-field");
var selectText = document.getElementById("select-text");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrow-icon");

selectField.onclick = function () {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}

for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}

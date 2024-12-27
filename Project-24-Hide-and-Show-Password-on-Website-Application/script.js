let eyeIcon = document.getElementById("eye-icon");
let password = document.getElementById("password");

eyeIcon.onclick = function () {

    if (password.type === "password") {
        password.type = "text";
        eyeIcon.src = "images/eye-close.png"
    } else {
        password.type = "password";
        eyeIcon.src = "images/eye-open.png"
    }

}
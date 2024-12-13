function showMessageContent(message) {

    const messageContent = document.querySelector(".message-content");
    messageContent.textContent = `"${message}" - Your Message has been Delivered.`;
    setTimeout(() => {
        messageContent.textContent = "";
    }, 5000);

}

function showInvalidMessage() {
    const invalidMessage = document.querySelector(".invalid-message");
    invalidMessage.style.display = "block";
    setTimeout(() => {
        invalidMessage.style.display = "none";
    }, 2000);

}

function onSubmitForm(event) {
    event.preventDefault();
    const messageInput = document.querySelector(".message");
    const message = messageInput.value.trim();

    if (message === "") {
        showInvalidMessage();
    } else {
        showMessageContent(message);
        messageInput.value = "";
    }
}

(function () {

    const form = document.querySelector("#form");
    form.addEventListener("submit", onSubmitForm);

})();
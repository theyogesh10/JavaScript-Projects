const myBtn = document.getElementById("my-btn");
const myPopover = document.getElementById("my-popover");
const closeBtn = document.getElementById("close-btn");

myBtn.addEventListener("click", function () {
    myPopover.classList.add("active");
});

closeBtn.addEventListener("click", function () {
    myPopover.classList.remove("active");
});
const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle("active");
    });
});

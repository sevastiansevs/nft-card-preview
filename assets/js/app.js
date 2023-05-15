let img = document.querySelector(".card__content__image");
let view = document.querySelector(".view");
let box = document.querySelector(".card__content__image");

img.addEventListener("mouseenter", function() {
    view.classList.add("active");
    box.classList.add("active");
});

img.addEventListener("mouseleave", function() {
    view.classList.remove("active");
    box.classList.remove("active");
});
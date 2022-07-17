const btn = document.querySelector(".burger");
const body = document.querySelector("body");


btn.addEventListener("click", function() {
    body.classList.toggle("menu-open");
})
const btn = document.querySelector("#btn-hamburger");
const menu = document.querySelector("#menu");

btn.addEventListener("click", function () {
  menu.classList.toggle("aperto");
  btn.setAttribute("aria-expanded", menu.classList.contains("aperto"));
});

console.log(btn);
console.log(menu);

const nav = document.getElementById("nav");
const links = document.querySelector("header .nav-links");
nav.addEventListener("click", function () {
  links.classList.toggle("open");
  let text = this.textContent;
  this.textContent = text === "≡" ? "x" : "≡";
});

links.querySelectorAll("li").forEach((link) => {
  link.addEventListener("click", function () {
    links.classList.toggle("open");
    let text = nav.textContent;
    nav.textContent = text === "≡" ? "x" : "≡";
  });
});

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

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("[name=email]");
    if (email.value.trim() && email.validity.valid) {
      document.querySelector(".join").classList.add("come");
      setTimeout(() => {
        document.querySelector(".join").classList.remove("come");
      }, 1000);
    }
  });
});

let body = document.querySelector("body");
let container = document.querySelector(".container");
let img = document.querySelector("img");
let close = document.querySelector("i");

img.addEventListener("click", (e) =>  {
  container.insertAdjacentHTML("afterend",
    `<div class="overlay-modal">
      <i class="close fa-solid fa-xmark"></i>
      <img class="overlay-modal__img" src="${e.target.src}" alt="Image">
      <h3>Trolltunga, Norway</h3>
    </div>`
  );
});

body.addEventListener("click", function (e) {
  if (e.target.classList.contains("close")) {
    document.querySelector(".overlay-modal").remove();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelector(".overlay-modal").remove();
  }
});
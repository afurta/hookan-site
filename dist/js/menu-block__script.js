const elements = document.querySelectorAll(".menu__info-name");
elements.forEach(elem => elem.addEventListener("click", showBlock));

function showBlock() {
  document
    .querySelector(".menu__info-name_active")
    .classList.remove("menu__info-name_active");
  this.classList.add("menu__info-name_active");

  document
    .querySelector(".menu__blocks_active")
    .classList.remove("menu__blocks_active");

  const currentEl = this.getAttribute("data-name");
  document.querySelector(`.${currentEl}`).classList.add("menu__blocks_active");
}

import "./style.css";

let carrouselIndex = 1;
const carrouselImgs = document.querySelectorAll(".carrousel__item");

// carrousel controls
document
  .querySelector("#carrousel__arrow_left")
  .addEventListener("click", (ev) => {
    if (carrouselIndex === carrouselImgs.length - 1) {
      carrouselIndex = 0;
    } else {
      carrouselIndex++;
    }
    for (let index = 0; index < carrouselImgs.length; index++) {
      const img = carrouselImgs[index];
      img.classList.add("carrousel__item_hidden");
    }
    carrouselImgs[carrouselIndex].classList.remove("carrousel__item_hidden");
  });

document
  .querySelector("#carrousel__arrow_right")
  .addEventListener("click", (ev) => {
    if (carrouselIndex === 0) {
      carrouselIndex = carrouselImgs.length - 1;
    } else {
      carrouselIndex--;
    }
    for (let index = 0; index < carrouselImgs.length; index++) {
      const img = carrouselImgs[index];
      img.classList.add("carrousel__item_hidden");
    }
    carrouselImgs[carrouselIndex].classList.remove("carrousel__item_hidden");
  });

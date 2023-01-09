import "./style.css";

let carrouselIndex = 1;
let carrouselTransform = -200;
const carrouselContainer = document.getElementsByClassName("carrousel__container")
const carrouselImgs = document.querySelectorAll (".carrousel__item")
const carrouselArrowLeft = document
.querySelector("#carrousel__arrow_left");
const carrouselArrowRight = document
.querySelector("#carrousel__arrow_right");
const slideWidth = carrouselImgs[0].clientWidth;
carrouselContainer[0].scrollLeft += slideWidth;

// carrousel controls
document
  .querySelector("#carrousel__arrow_right")
  .addEventListener("click", (ev) => {
    if (carrouselIndex === carrouselImgs.length - 1) {
      carrouselIndex = 0;
      carrouselTransform = -200;
    } else {
      carrouselTransform += 100;
    }
    const slideWidth = carrouselImgs[0].clientWidth;
    carrouselContainer[0].scrollLeft -= slideWidth;
});

document
  .querySelector("#carrousel__arrow_left")
  .addEventListener("click", (ev) => {
    if (carrouselIndex === 0) {
      carrouselIndex = carrouselImgs.length - 1;
      carrouselTransform = -200;
    } else {
      carrouselIndex-= 100;
    }
    const slideWidth = carrouselImgs[0].clientWidth;
    carrouselContainer[0].scrollLeft += slideWidth;
});

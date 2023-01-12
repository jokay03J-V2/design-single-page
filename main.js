import "./style.css";

let carouselIndex = 1;
const carouselImgs = document.querySelectorAll (".carousel__item")

// carousel controls
document
  .querySelector("#carousel__arrow_left")
  .addEventListener("click", (ev) => {
    if (carouselIndex === carouselImgs.length - 1) {
      carouselIndex = 0;
    } else {
      carouselIndex++;
    }
    for (let index = 0; index < carouselImgs.length; index++) {
      const img = carouselImgs[index];
      img.classList.remove("carousel__item_active");
    }
    carouselImgs[carouselIndex].classList.add("carousel__item_active");
});

document
  .querySelector("#carousel__arrow_right")
  .addEventListener("click", (ev) => {
    console.log(carouselIndex);
    if (carouselIndex === 0) {
      carouselIndex = carouselImgs.length - 1;
    } else {
      carouselIndex--;
    }
    for (let index = 0; index < carouselImgs.length; index++) {
      const img = carouselImgs[index];
      img.classList.remove("carousel__item_active");
    }
    carouselImgs[carouselIndex].classList.add("carousel__item_active");
});

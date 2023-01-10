import "./style.css";

let carouselIndex = 1;
let carouselTransform = -200;
const carouselContainer = document.getElementsByClassName("carousel__container")
const carouselImgs = document.querySelectorAll (".carousel__item")
const Imgs = ["./assets/image-slide-1.jpg", "./assets/image-slide-2.jpg", "./assets/image-slide-3.jpg", "./assets/image-slide-4.jpg", "./assets/image-slide-5.jpg"];
const firstImg = document.getElementById("carousel__item1")
const secondeImg = document.getElementById("carousel__item2")
const threeImg = document.getElementById("carousel__item3")

// carousel controls
document
  .querySelector("#carousel__arrow_right")
  .addEventListener("click", (ev) => {
    if (carouselIndex === Imgs.length - 1) {
      carouselIndex = 0;
    } else {
      carouselIndex++
      for (let index = 0; index < carouselImgs.length; index++) {
        const img = carouselImgs[index];
        img.classList.remove("carousel__item_active")
      }
      carouselImgs[carouselIndex].classList.add("carousel__item_active")
    }
});

document
  .querySelector("#carousel__arrow_left")
  .addEventListener("click", (ev) => {
    if (carouselIndex === 0) {
      carouselIndex = Imgs.length - 1;
    } else {
      carouselIndex--
      for (let index = 0; index < carouselImgs.length; index++) {
        const img = carouselImgs[index];
        img.classList.remove("carousel__item_active")
      }
      carouselImgs[carouselIndex].classList.add("carousel__item_active")
    }
});

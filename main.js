import "./style.css";

let carrouselIndex = 1;
let carrouselTransform = -200;
const carrouselContainer = document.getElementsByClassName("carrousel__container")
const carrouselImgs = document.querySelectorAll (".carrousel__item")
const Imgs = ["./assets/image-slide-1.jpg", "./assets/image-slide-2.jpg", "./assets/image-slide-3.jpg", "./assets/image-slide-4.jpg", "./assets/image-slide-5.jpg"];
const firstImg = document.getElementById("carrousel__item1")
const secondeImg = document.getElementById("carrousel__item2")
const threeImg = document.getElementById("carrousel__item3")

// carrousel controls
document
  .querySelector("#carrousel__arrow_right")
  .addEventListener("click", (ev) => {
    if (carrouselIndex === Imgs.length - 1) {
      carrouselIndex = 0;
    } else {
      carrouselIndex++
      for (let index = 0; index < carrouselImgs.length; index++) {
        const img = carrouselImgs[index];
        img.classList.remove("carrousel__item_active")
      }
      carrouselImgs[carrouselIndex].classList.add("carrousel__item_active")
    }
});

document
  .querySelector("#carrousel__arrow_left")
  .addEventListener("click", (ev) => {
    if (carrouselIndex === 0) {
      carrouselIndex = Imgs.length - 1;
    } else {
      carrouselIndex--
      for (let index = 0; index < carrouselImgs.length; index++) {
        const img = carrouselImgs[index];
        img.classList.remove("carrousel__item_active")
      }
      carrouselImgs[carrouselIndex].classList.add("carrousel__item_active")
    }
});

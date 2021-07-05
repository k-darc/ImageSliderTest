const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const container = document.querySelector(".images");

let counter = 0;

nextBtn.addEventListener("click",nextSlide);
prevBtn.addEventListener("click",prevSlide);
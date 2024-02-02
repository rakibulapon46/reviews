// local reviews data
//data import from data.js file
import { reviews } from "../js/data.js";

// select items
const img = document.getElementById("car_img");
const author = document.getElementById("author");
const series = document.getElementById("class");
const info = document.getElementById("info");

const prevBtn = document.getElementById("prev_btn");
const nextBtn = document.getElementById("next_btn");
const randomBtn = document.getElementById("random_btn");

// starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showCar(currentItem);
});

function showCar() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  series.textContent = item.class;
  info.textContent = item.text;
}

// next button
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showCar(currentItem);
});

// prev button
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showCar(currentItem);
});

// random button
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showCar();
});

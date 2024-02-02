// local reviews data
const reviews = [
  {
    id: 1,
    img: "../img/chiron.jpg",
    name: "Bugatti Chiron",
    class: "luxury sports",
    text: "The Bugatti Chiron epitomizes automotive excellence, boasting a quad-turbocharged W16 engine, 1500 horsepower, and a top speed of 261 mph. Its fusion of luxury, speed, and engineering mastery captivates enthusiasts worldwide.",
  },
  {
    id: 2,
    img: "../img/m5-g-power.jpg",
    name: "BMW M5 G Power",
    class: "luxury sports sedan g power",
    text: "The BMW M5 G-Power unleashes unparalleled performance with its twin-turbo V8, delivering 800 horsepower. Enhanced aerodynamics, bespoke suspension, and luxurious interiors redefine the epitome of high-performance sedans.",
  },
  {
    id: 3,
    img: "../img/jesko.jpg",
    name: "Koenigsegg Jesko",
    class: "luxury hypercar",
    text: "The Koenigsegg Jesko redefines hypercar standards with its twin-turbo V8 producing over 1600 horsepower. Cutting-edge aerodynamics, advanced engineering, and luxurious craftsmanship culminate in an unparalleled driving experience at the pinnacle of automotive excellence.",
  },
  {
    id: 4,
    img: "../img/amr.jpg",
    name: "Aston Martin AMR",
    class: "track racing car",
    text: "The Aston Martin AMR embodies track-inspired performance with a potent V12 engine and advanced aerodynamics. Its exquisite design, luxurious interior, and race-bred technology deliver an unforgettable driving experience for enthusiasts worldwide.",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/originals/ec/31/97/ec31970d4c594f0a020878a33ae4e498.jpg",
    name: "Mercedes-Benz AMG GT R",
    class: "luxury supercar",
    text: "The Mercedes-AMG GT R epitomizes track-focused performance with a handcrafted V8 engine, aggressive aerodynamics, and advanced chassis technology. Its blend of power, precision, and luxury sets new benchmarks in the supercar.",
  },
  {
    id: 6,
    img: "../img/aventador.jpg",
    name: "Lamborghini Aventador",
    class: "luxury racing car",
    text: "The Lamborghini Aventador defines automotive extravagance with its V12 engine, jaw-dropping design, and blistering performance. A symbol of Italian craftsmanship and engineering prowess, it commands attention on both road and runway.",
  },
  {
    id: 7,
    img: "../img/m5cs.jpg",
    name: "BMW M5 CS",
    class: "luxury sports sedan",
    text: "The BMW M5 CS stands as the apex of M5 performance, boasting a potent twin-turbo V8 engine, enhanced dynamics, and bespoke luxury. It epitomizes the fusion of track-bred performance and everyday practicality.",
  },
];

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

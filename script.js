// script.js

function toggleMenu() {
  document.getElementById('nav').classList.toggle('active');
}

function buyNow() {
  const btn = event.target;
  btn.innerText = "Processing...";
  btn.disabled = true;
  setTimeout(() => {
    alert("✅ Added to cart!");
    btn.innerText = "Buy Now";
    btn.disabled = false;
  }, 1200);
}

// IMAGE SLIDER 
document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "images/mouse1.jpg",
    "images/mouse2.jpg",
    "images/mouse3.jpg"
  ];

  let currentIndex = 0;
  const sliderImg = document.getElementById("slider-img");

  function showSlide(index) {
    sliderImg.src = images[index];
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }

  // Make buttons work
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  // Auto slide
  setInterval(nextSlide, 3000);
});

// Auto slide every 3s
setInterval(nextSlide, 3000);

// Countdown
let timeLeft = 60;
const countdownEl = document.getElementById('countdown');

function updateCountdown() {
  if (timeLeft <= 0) {
    countdownEl.innerText = "Offer expired";
    return;
  }
  const m = Math.floor(timeLeft/60);
  const s = timeLeft % 60;
  countdownEl.innerText = `⏳ Ends in ${m}:${s.toString().padStart(2,'0')}`;
  timeLeft--;
}

setInterval(updateCountdown,1000);

// smooth scroll
document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    document.getElementById('nav').classList.remove('active');
  });
});
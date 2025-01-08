const slides = document.querySelector('.slides');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 300}px)`;
}

setInterval(showNextSlide, 3000); // Cambia immagine ogni 3 secondi

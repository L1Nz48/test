let slideIndex = {};

function initSlider(sliderId) {
    let slides = document.querySelectorAll(`#${sliderId} .slide`);
    slideIndex[sliderId] = 0;
    slides[slideIndex[sliderId]].style.display = "block";
}

function showSlide(sliderId, n) {
    let slides = document.querySelectorAll(`#${sliderId} .slide`);
    slides.forEach(slide => (slide.style.display = "none"));
    slideIndex[sliderId] = (n + slides.length) % slides.length;
    slides[slideIndex[sliderId]].style.display = "block";
}

function prevSlide(sliderId) {
    showSlide(sliderId, slideIndex[sliderId] - 1);
}

function nextSlide(sliderId) {
    showSlide(sliderId, slideIndex[sliderId] + 1);
}

// Initialize sliders for all weeks
document.addEventListener("DOMContentLoaded", function() {
    initSlider("week1-slider");
    initSlider("week2-slider");
    initSlider("week3-slider");
    initSlider("week4-slider");
    initSlider("week5-slider");
    initSlider("week6-slider");
    initSlider("week7-slider");
    initSlider("week8-slider");
    initSlider("week9-slider");
});

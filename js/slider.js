var slides = document.querySelectorAll('.carousel__inner .carousel__item-wrapper');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    slides[currentSlide].className = 'carousel__item-wrapper';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'carousel__item-wrapper active';
};
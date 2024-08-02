
let slideIndex = 0;
let autoSlideTimer;

function plusSlides(n) {
    clearTimeout(autoSlideTimer);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(autoSlideTimer);
    showSlides(slideIndex = n - 1);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("my-slides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].className += " active";
    dots[slideIndex-1].className += " active";
    autoSlideTimer = setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

window.onload = function() {
    showSlides(slideIndex);
}
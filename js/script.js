document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".image-slide");
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    setInterval(nextSlide, 3000); // Geser otomatis setiap 3 detik
});
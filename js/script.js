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

document.getElementById("send-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah tombol mengirim form tanpa validasi

    let isValid = true;

    // Ambil nilai input
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let destination = document.getElementById("destination").value;

    // Validasi Nama
    if (name === "") {
        document.getElementById("error-name").innerText = "Nama tidak boleh kosong!";
        isValid = false;
    } else {
        document.getElementById("error-name").innerText = "";
    }

    // Validasi Email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("error-email").innerText = "Email tidak boleh kosong!";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("error-email").innerText = "Format email tidak valid!";
        isValid = false;
    } else {
        document.getElementById("error-email").innerText = "";
    }

    // Validasi Pilihan Tujuan
    if (destination === "") {
        document.getElementById("error-destination").innerText = "Pilih tujuan terlebih dahulu!";
        isValid = false;
    } else {
        document.getElementById("error-destination").innerText = "";
    }

    // Jika semua valid, tampilkan alert (atau bisa dikirim ke backend)
    if (isValid) {
        alert("Form berhasil dikirim!");
    }
});
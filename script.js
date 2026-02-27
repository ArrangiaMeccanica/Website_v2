// ========================
// Hamburger menu toggle
// ========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// ========================
// Lightbox per immagini
// ========================
window.addEventListener('load', () => {
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = lightbox.querySelector('img');
    const clickableImages = document.querySelectorAll('.merch-image img, .gallery-item img');

    clickableImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
});

// ========================
// Britney Glow (Cinematic)
// ========================
document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("britney-btn");
    const glow = document.getElementById("britney-glow");

    if (!btn || !glow) return;

    btn.addEventListener("click", function () {

        // Glow attivo
        glow.classList.add("active");

        // PayPal immediato (Safari safe)
        const url = btn.href;
        window.open(url, "_blank");

        // Glow più lungo e morbido
        setTimeout(() => {
            glow.classList.remove("active");
        }, 5000); // 🔥 durata glow (modifica qui se vuoi)

    });

});
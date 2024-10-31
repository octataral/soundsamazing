document.addEventListener('DOMContentLoaded', (event) => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const close = document.getElementsByClassName('close')[0];
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    // Get all images with class 'gallery-img'
    const images = document.getElementsByClassName('gallery-img');
    let currentIndex = 0;

    // Add click event to each image
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = function() {
            currentIndex = i; // Set the current index
            openLightbox(this);
        }
    }

    function openLightbox(img) {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        caption.innerHTML = img.alt;
    }

    // Close lightbox when clicking on 'x'
    close.onclick = function() {
        lightbox.style.display = "none";
    }

    // Close lightbox when clicking outside the image
    window.onclick = function(event) {
        if (event.target == lightbox) {
            lightbox.style.display = "none";
        }
    }

    // Navigate to the previous image
    prev.onclick = function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Loop to last image
        updateLightboxImage();
    }

    // Navigate to the next image
    next.onclick = function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Loop to first image
        updateLightboxImage();
    }

    function updateLightboxImage() {
        lightboxImg.src = images[currentIndex].src;
        caption.innerHTML = images[currentIndex].alt;
    }
});
document.addEventListener('DOMContentLoaded', (event) => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const close = document.getElementsByClassName('close')[0];

    // Get all images with class 'gallery-img'
    const images = document.getElementsByClassName('gallery-img');

    // Add click event to each image
    for (let img of images) {
        img.onclick = function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
            caption.innerHTML = this.alt;
        }
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
});

function expandGallery(galleryClass) {
    // Hide all full galleries
    const allGalleries = document.querySelectorAll('.full-gallery');
    allGalleries.forEach(gallery => {
        if (gallery.classList.contains(galleryClass)) {
            // Toggle the display of the clicked gallery
            gallery.style.display = gallery.style.display === 'none' || gallery.style.display === '' ? 'flex' : 'none';
        } else {
            gallery.style.display = 'none'; // Hide other galleries
        }
    });
}
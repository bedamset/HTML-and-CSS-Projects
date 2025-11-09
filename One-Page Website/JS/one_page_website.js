// Create lightbox container
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);

const galleryImages = document.querySelectorAll('.gallery img');
let currentIndex = 0;

// Function to open lightbox at a specific index
function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryImages[currentIndex].src;
    lightbox.style.opacity = 1;
    lightbox.style.pointerEvents = 'auto';
}

// Function to close lightbox
function closeLightbox() {
    lightbox.style.opacity = 0;
    lightbox.style.pointerEvents = 'none';
}

// Event listener for clicking thumbnails
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        openLightbox(index);
    });
});

// Close lightbox if clicked outside image
lightbox.addEventListener('click', e => {
    if (e.target !== lightboxImg) {
        closeLightbox();
    }
});

// Arrow key navigation
document.addEventListener('keydown', e => {
    if (lightbox.style.opacity === '1') { // Only if lightbox is open
        if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            lightboxImg.src = galleryImages[currentIndex].src;
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            lightboxImg.src = galleryImages[currentIndex].src;
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    }
});

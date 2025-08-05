Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: { autoStart: true },
    Toolbar: { display: ["zoom", "close"] },
});

const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', () => {
    document.documentElement.scrollTop > 100 
        ? backToTopBtn.classList.add('show') 
        : backToTopBtn.classList.remove('show');
});

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

function applyGalleryAnimations() {
    const galleryItems = document.querySelectorAll('.gallery-container a');
    galleryItems.forEach((item, index) => {
        if (isInViewport(item)) {
            const delay = index * 100; // 100ms delay per item
            setTimeout(() => {
                item.classList.add('animate');
            }, delay);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    const videoContainer = document.querySelector('.video-container');
    
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    function applyHeroAnimations() {
        if (isInViewport(heroContent)) {
            heroContent.classList.add('animate');
        }
        if (isInViewport(videoContainer)) {
            videoContainer.classList.add('animate');
        }
    }

    window.addEventListener('scroll', applyHeroAnimations);
    applyHeroAnimations();
});
window.addEventListener('scroll', applyGalleryAnimations);
document.addEventListener('DOMContentLoaded', applyGalleryAnimations);

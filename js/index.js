const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});
backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}
function applyScrollAnimations() {
    const slideInLeftElements = document.querySelectorAll('.slide-in-left');
    const slideInRightElements = document.querySelectorAll('.slide-in-right');
    slideInLeftElements.forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('start-animation');
        }
    });
    slideInRightElements.forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('start-animation');
        }
    });
}
window.addEventListener('scroll', applyScrollAnimations);
document.addEventListener('DOMContentLoaded', applyScrollAnimations);

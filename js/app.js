const overlay = document.getElementById('overlay');
const sections = document.querySelectorAll('.section');

// Preload all background images
function preloadImages() {
    sections.forEach(section => {
        const bgImage = getComputedStyle(section).getPropertyValue('--bg-image').slice(5, -2);
        const img = new Image();
        img.src = bgImage;
    });
}
document.addEventListener('DOMContentLoaded', preloadImages);

//observer section function
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const observerBackground = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const bgImage = getComputedStyle(entry.target).getPropertyValue('--bg-image');
            if (bgImage) {
                // Fade to black
                overlay.style.opacity = 1;
                setTimeout(() => {
                    document.body.style.backgroundImage = bgImage;
                    // Fade back to the content
                    overlay.style.opacity = 0;
                }, 500);
            }
        }
    });
}, {
    threshold: [0.15] // Trigger when 25% of the section is visible
});


//add observer
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements.forEach((el) => observerBackground.observe(el));
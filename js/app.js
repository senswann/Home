const overlay = document.getElementById('overlay');

//observer section function
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            if (entry.intersectionRatio >= 0.75) {
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
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: [0, 0.5, 1]
});


//add observer
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
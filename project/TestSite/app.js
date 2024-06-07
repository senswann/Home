// app.js
const overlay = document.getElementById('overlay');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            const bgImage = getComputedStyle(entry.target).getPropertyValue('--bg-image');

            // Start the fade-to-black effect
            overlay.style.opacity = 1;

            // After the fade to black, change the background image
            setTimeout(() => {
                document.body.style.backgroundImage = bgImage;

                // Fade back to the new background image
                overlay.style.opacity = 0;
            }, 1000); // 1 second fade to black
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
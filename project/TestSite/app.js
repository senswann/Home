// app.js
const overlay = document.getElementById('overlay');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            const bgImage = getComputedStyle(entry.target).getPropertyValue('--bg-image');

            //fade in black 1s
            overlay.style.opacity = 1;
            setTimeout(() => {
                document.body.style.backgroundImage = bgImage;

                overlay.style.opacity = 0;
            }, 1000);
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
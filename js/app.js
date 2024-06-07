// app.js
const overlay = document.getElementById('overlay');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            const bgImage = getComputedStyle(entry.target).getPropertyValue('--bg-image');
            if(bgImage){
                //fade in black 0.5s
                overlay.style.opacity = 1;
                setTimeout(() => {
                    document.body.style.backgroundImage = bgImage;
    
                    overlay.style.opacity = 0;
                }, 500);
            }
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Prevent widows
const preventWidows = () => {
    document.querySelectorAll('p').forEach(paragraph => {
        const words = paragraph.innerHTML.split(' ');
        if (words.length > 1) {
            words[words.length - 2] += '&nbsp;' + words.pop();
            paragraph.innerHTML = words.join(' ');
        }
    });
};

// Run preventWidows on DOM content loaded
document.addEventListener('DOMContentLoaded', preventWidows);
// app.js
const overlay = document.getElementById('overlay');
const contentDiv = document.getElementById('content');

// load function
const loadHTML = async (url, container) => {
    try {
        const response = await fetch(url);
        const text = await response.text();
        container.innerHTML += text;
    } catch (error) {
        console.error('Error loading HTML:', error);
    }
};

// Load parts
loadHTML('section/header.html', contentDiv);
loadHTML('section/granmaggedon.html', contentDiv);
loadHTML('section/mm_noel.html', contentDiv);
loadHTML('section/test_tec_ue_2023.html', contentDiv);
loadHTML('section/P0rT4L.html', contentDiv);
loadHTML('section/openGL.html', contentDiv);
loadHTML('section/G3om3tryD4sh.html', contentDiv);
loadHTML('section/java.html', contentDiv);
loadHTML('section/footer.html', contentDiv);

//observer section function
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

//add observer
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
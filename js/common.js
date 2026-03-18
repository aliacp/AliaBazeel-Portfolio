// Common Page Logic

// Smooth Scroll for local links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Nav Toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.querySelector('nav');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile nav when clicking a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (nav && navToggle) {
            nav.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

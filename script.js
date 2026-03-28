// Premium Portfolio Logic - Shubham Dev

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Custom Cursor Glow Effect
    const cursor = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 2. Navbar Scroll Effect
    const header = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(11, 9, 10, 0.9)';
            header.style.padding = '15px 0';
        } else {
            header.style.background = 'rgba(11, 9, 10, 0.7)';
            header.style.padding = '20px 0';
        }
    });

    // 3. Smooth Reveal on Scroll
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once visible, stop observing
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply visibility class and observe sections
    const revealElements = [
        ...document.querySelectorAll('section'),
        ...document.querySelectorAll('.timeline-item'),
        ...document.querySelectorAll('.skill-card'),
        ...document.querySelectorAll('.edu-card'),
        ...document.querySelectorAll('.cert-category'),
        ...document.querySelectorAll('.volunteer-card')
    ];

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Add necessary CSS for the reveal animation dynamically
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);

    // 4. Smooth Anchor Scrolling
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

});

// 5. Toggle hidden certifications
function toggleCerts() {
    const hiddenCards = document.querySelectorAll('.cert-hidden');
    const btn = document.getElementById('btn-show-more-certs');
    const isExpanded = btn.classList.contains('expanded');

    hiddenCards.forEach(card => {
        card.classList.toggle('show');
    });

    btn.classList.toggle('expanded');
    btn.innerHTML = isExpanded 
        ? 'Show All <i class="fa-solid fa-chevron-down"></i>'
        : 'Show Less <i class="fa-solid fa-chevron-down"></i>';
}

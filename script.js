/**
 * Simple interactivity for the portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll for Navigation Links
    const links = document.querySelectorAll('.nav-links a, .hero-btns a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Form Submission Handling (Preventing reload)
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Collect data (for simulation)
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Visual feedback
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.innerText;
        
        submitBtn.innerText = "Sending...";
        submitBtn.style.opacity = "0.7";
        submitBtn.disabled = true;

        setTimeout(() => {
            alert(`Thank you, ${data.name}! Your message has been sent successfully.`);
            submitBtn.innerText = originalText;
            submitBtn.style.opacity = "1";
            submitBtn.disabled = false;
            contactForm.reset();
        }, 1500);
    });

    // 3. Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Apply reveal effect to service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });
});
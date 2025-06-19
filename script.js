// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections for scroll animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Add animation classes to specific elements
    document.querySelectorAll('.container > h3, .container > h4').forEach((heading, index) => {
        if (index % 2 === 0) {
            heading.classList.add('slide-in-left');
        } else {
            heading.classList.add('slide-in-right');
        }
    });
    
    // Add hover effect to list items
    document.querySelectorAll('li').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Parallax effect for floating icons
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    if (floatingIcons.length > 0) {
        window.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            floatingIcons.forEach((icon, index) => {
                const speed = (index + 1) * 10;
                const xOffset = (x - 0.5) * speed;
                const yOffset = (y - 0.5) * speed;
                
                icon.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        });
    }
    
    // Add glow effect to hero illustration on hover
    const heroIllustration = document.querySelector('.hero-illustration');
    if (heroIllustration) {
        heroIllustration.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 60px rgba(0, 229, 255, 0.3)';
        });
        
        heroIllustration.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
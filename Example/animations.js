// animations.js

document.addEventListener('DOMContentLoaded', () => {
    // Fade in hero text on load
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
  
    setTimeout(() => {
      heroTitle.style.opacity = 1;
      heroTitle.style.transform = 'translateY(0)';
    }, 300);
  
    setTimeout(() => {
      heroSubtitle.style.opacity = 1;
      heroSubtitle.style.transform = 'translateY(0)';
    }, 600);
  
    // Scroll animation for all elements with .animate-on-scroll class
    const animatedSections = document.querySelectorAll('.animate-on-scroll');
  
    function checkAnimation() {
      const triggerBottom = window.innerHeight * 0.85;
  
      animatedSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
  
        if (sectionTop < triggerBottom) {
          section.classList.add('show');
        }
      });
    }
  
    window.addEventListener('scroll', checkAnimation);
  
    // Trigger on page load in case some sections are already visible
    checkAnimation();
  });
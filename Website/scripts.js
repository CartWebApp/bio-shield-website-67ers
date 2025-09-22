// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetId.includes('.html')) {
      window.location.href = targetId;
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

// Hero section fade-in on load (index.html)
document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    setTimeout(() => {
      heroContent.classList.add('visible');
    }, 100);
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animations
document.querySelectorAll('.features-list li, .testimonials blockquote, .about-page section, .contact-form-section, .company-info').forEach(element => {
  observer.observe(element);
});

// Newsletter form submission simulation
document.querySelectorAll('.newsletter-form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = form.querySelector('#email');
    const submitButton = form.querySelector('.btn-accent');
    
    submitButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
      submitButton.style.transform = 'scale(1)';
      console.log(`Subscribed with email: ${emailInput.value}`);
      emailInput.value = '';
      alert('Thank you for subscribing!');
    }, 200);
  });
});

// Contact form submission simulation (contact.html)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('#name').value;
    const email = contactForm.querySelector('#email').value;
    const subject = contactForm.querySelector('#subject').value;
    const message = contactForm.querySelector('#message').value;
    const submitButton = contactForm.querySelector('.btn-accent');
    
    submitButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
      submitButton.style.transform = 'scale(1)';
      console.log(`Contact form submitted: Name=${name}, Email=${email}, Subject=${subject}, Message=${message}`);
      contactForm.reset();
      alert('Thank you for your message!');
    }, 200);
  });
}

// Product filter functionality (products.html)
const categoryFilter = document.querySelector('#category-filter');
if (categoryFilter) {
  categoryFilter.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
      card.style.opacity = '0';
      setTimeout(() => {
        if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      }, 300);
    });
  });
}
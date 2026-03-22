// contact-form-validation.js

// Contact form validation
function validateForm(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (message.trim() === '') {
        alert('Message cannot be empty.');
        return;
    }
    // Form is valid
    form.submit();
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Smooth scrolling
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
};

// Event listeners for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
    
    const scrollToButton = document.querySelector('.scroll-to');
    if (scrollToButton) {
        scrollToButton.addEventListener('click', () => smoothScroll('#targetSection'));
    }
});
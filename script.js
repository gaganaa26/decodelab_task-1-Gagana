// ==========================================================================
// DECODELABS PROJECT 1: INTERACTIVE LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Mobile Hamburger Menu Toggle ---
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on any link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // --- 2. Contact Form Handling ---
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent default page refresh
      
      const name = document.getElementById('name').value;
      alert(`Thank you, ${name}! Your message has been received. We will get back to you soon.`);
      
      contactForm.reset();
    });
  }

  // --- 3. Simple Button Feedback for Menu Cards ---
  const orderButtons = document.querySelectorAll('.btn-card');
  orderButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Item added to your order!');
    });
  });

});
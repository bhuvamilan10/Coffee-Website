const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

/* Initializing Swiper */
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// form validate

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Reset error messages
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(error => (error.textContent = ''));

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  // Validate name
  const nameRegex = /^[a-zA-Z\s]+$/; // Allows only letters and spaces
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    isValid = false;
  } else if (!nameRegex.test(name)) {
    document.getElementById('nameError').textContent = 'Enter a valid name (letters only)';
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email';
    isValid = false;
  }

  // Validate message
  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required';
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    this.reset(); // Reset the form
  }
});
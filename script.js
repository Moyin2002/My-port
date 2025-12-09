document.addEventListener("DOMContentLoaded", function () {

  // ===== Sticky Navbar on Scroll =====
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const scrollBtn = document.querySelector(".scroll-up-btn");

    if (window.scrollY > 20) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }

    if (window.scrollY > 500) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  // ===== Scroll Up Button =====
  document.querySelector(".scroll-up-btn").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

 // ===== Toggle Menu (Hamburger) =====
 const navMenu = document.querySelector(".navbar .menu");
 const navToggle = document.querySelector(".menu-btn");
 const navIcon = document.querySelector(".menu-btn i");
 const menuLinks = document.querySelectorAll(".menu-links");

 navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navIcon.classList.toggle("active");
 });

// Close menu when a link is clicked
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navIcon.classList.remove("active");
  });
});


  // ===== Typed.js Animations =====
  new Typed(".typing", {
    strings: ["Web Developer", "Instructor", "Blogger", "Video Editor", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  new Typed(".typing-2", {
    strings: ["Web Developer", "Instructor", "Blogger", "Video Editor", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // ===== Vanilla JS Carousel (Owl Carousel Replacement) =====
  const carousel = document.querySelector(".carousel");
  let isDragging = false, startX, scrollLeft;

  if (carousel) {
    carousel.addEventListener("mousedown", (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mouseleave", () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    });

    carousel.addEventListener("mouseup", () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    });

    carousel.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // scroll speed
      carousel.scrollLeft = scrollLeft - walk;
    });
  }

  // Select the form
const form = document.getElementById('contact-form');

// Listen for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = form.querySelector('input[name="name"]').value;

  // Show modern popup using SweetAlert2 with Poppins font
  Swal.fire({
    icon: 'success',
    title: 'Thank You!',
    text: `Thank you for contacting us, ${name}! We will get back to you soon.`,
    confirmButtonText: 'Close',
    confirmButtonColor: '#dc143c',
    customClass: {
      popup: 'swal2-poppins', // applies to the whole popup
      title: 'swal2-title',
      content: 'swal2-content',
      confirmButton: 'swal2-confirm'
    }
  });

  // Reset the form
  form.reset();
});


});

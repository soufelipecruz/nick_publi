// Menu mobile
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});

// Animação de entrada
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("appear");
    });
  }, { threshold: 0.1 });

  sections.forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
  });
});

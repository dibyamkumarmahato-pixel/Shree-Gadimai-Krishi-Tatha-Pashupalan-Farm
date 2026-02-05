/* ================================
   Shree Gadimai Farm - script.js
   ================================ */

/* Smooth scroll for internal links */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* Fade-in animation on scroll */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

/* Active navbar link highlight */
const navLinks = document.querySelectorAll(".navbar a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.fontWeight = "bold";
    link.style.textDecoration = "underline";
  }
});

/* Auto update footer year */
const footers = document.querySelectorAll("footer");
const year = new Date().getFullYear();

footers.forEach(footer => {
  if (!footer.innerHTML.includes(year)) {
    footer.innerHTML += ` | ${year}`;
  }
});

/* Console welcome (for testing) */
console.log("🌱 Shree Gadimai Krishi Tatha Pashupalan Farm website loaded successfully");

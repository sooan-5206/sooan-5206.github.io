const sections = document.querySelectorAll('.hidden');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
});

const toggle = document.getElementById("toggle-theme");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const items = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
});




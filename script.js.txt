const sections = document.querySelectorAll('.hidden');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
});

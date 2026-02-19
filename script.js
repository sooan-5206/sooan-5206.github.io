document.addEventListener("DOMContentLoaded", function() {

  /* ===== HAMBURGER ===== */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  /* ===== VOLUNTEER TAB FILTER ===== */
  const tabs = document.querySelectorAll(".vol-tab");
  const groups = document.querySelectorAll(".vol-group");

  if (tabs.length > 0) {

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const category = tab.getAttribute("data-category");

        groups.forEach(group => {
          if (group.getAttribute("data-category") === category) {
            group.classList.add("active");
          } else {
            group.classList.remove("active");
          }
        });

      });
    });

    // default show FTU
    const defaultGroup = document.querySelector('.vol-group[data-category="ftu"]');
    if (defaultGroup) {
      defaultGroup.classList.add("active");
    }
  }

});

const volItems = document.querySelectorAll(".vol-item");

volItems.forEach(item => {
  item.addEventListener("click", function() {

    // Nếu đang mở thì đóng lại
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      return;
    }

    // Đóng tất cả
    volItems.forEach(i => i.classList.remove("active"));

    // Mở cái được click
    this.classList.add("active");

  });
});

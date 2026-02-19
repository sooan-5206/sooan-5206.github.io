document.addEventListener("DOMContentLoaded", function() {

  /* ===== HAMBURGER ===== */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".menu");

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

    tabs[0].click(); // default tab
  }

  /* ===== VOLUNTEER ACCORDION ===== */
  const volItems = document.querySelectorAll(".vol-item");

  volItems.forEach(item => {
    item.addEventListener("click", function () {

      if (this.classList.contains("active")) {
        this.classList.remove("active");
        return;
      }

      volItems.forEach(i => i.classList.remove("active"));
      this.classList.add("active");

    });
  });

  /* ===== EXPERIENCE TAB FILTER ===== */
  const expTabs = document.querySelectorAll(".exp-tab");
  const expGroups = document.querySelectorAll(".exp-group");

  if (expTabs.length > 0) {

    expTabs.forEach(tab => {
      tab.addEventListener("click", () => {

        expTabs.forEach(t => t.classList.remove("active"));
        expGroups.forEach(g => g.classList.remove("active"));

        tab.classList.add("active");

        const category = tab.getAttribute("data-category");

        document
          .querySelector(`.exp-group[data-category="${category}"]`)
          .classList.add("active");

      });
    });

    expTabs[0].click(); // default tab
  }

});

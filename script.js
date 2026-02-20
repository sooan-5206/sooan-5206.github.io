document.addEventListener("DOMContentLoaded", function () {

  /* ===== HAMBURGER ===== */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  /* ===== VOLUNTEER TAB FILTER ===== */
  const volTabs = document.querySelectorAll(".vol-tab");
  const volGroups = document.querySelectorAll(".vol-group");

  if (volTabs.length > 0) {
    volTabs.forEach(tab => {
      tab.addEventListener("click", () => {

        volTabs.forEach(t => t.classList.remove("active"));
        volGroups.forEach(g => g.classList.remove("active"));

        tab.classList.add("active");

        const category = tab.getAttribute("data-category");

        const target = document.querySelector(
          `.vol-group[data-category="${category}"]`
        );

        if (target) target.classList.add("active");
      });
    });

    volTabs[0].click();
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

        const target = document.querySelector(
          `.exp-group[data-category="${category}"]`
        );

        if (target) target.classList.add("active");
      });
    });

    expTabs[0].click();
  }

});

/* ===== CERTIFICATE MODAL ===== */

const certModal = document.getElementById("certModal");
const certImage = document.getElementById("certImage");
const certClose = document.getElementById("certClose");

function openCert(src) {
  certImage.src = src;
  certModal.classList.add("active");
}

function closeCert() {
  certModal.classList.remove("active");
}

if (certClose) {
  certClose.addEventListener("click", closeCert);
}

if (certModal) {
  certModal.addEventListener("click", function (e) {
    if (e.target === certModal) {
      closeCert();
    }
  });
}

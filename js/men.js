// men.js

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

  const normalize = (str) => str?.toLowerCase().replace(/\s+/g, "").trim();

  const applyFilter = (filter) => {
    const normalizedFilter = normalize(filter);

    buttons.forEach((btn) => {
      const btnFilter = normalize(
        btn.getAttribute("data-filter") || btn.textContent,
      );
      btn.classList.toggle("active", btnFilter === normalizedFilter);
    });

    products.forEach((product) => {
      const category = normalize(product.dataset.category);
      const isBestSeller = product.dataset.bestseller === "true";

      if (
        normalizedFilter === "all" ||
        category === normalizedFilter ||
        (normalizedFilter === "bestseller" && isBestSeller)
      ) {
        product.style.display = "block";
        setTimeout(() => (product.style.opacity = "1"), 50);
      } else {
        product.style.opacity = "0";
        setTimeout(() => (product.style.display = "none"), 250);
      }
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter") || btn.textContent;
      applyFilter(filter);
    });
  });

  const params = new URLSearchParams(window.location.search);
  const urlFilter = params.get("filter");
  if (urlFilter) {
    applyFilter(urlFilter);
  } else {
    applyFilter("all");
  }

  // ----------------------
  // Header Dropdowns
  // ----------------------

  // Dropdown click
  document.querySelectorAll(".dropdown-toggle").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent closing
      const navItem = btn.closest(".nav-item");

      // close others
      document.querySelectorAll(".nav-item.active").forEach((item) => {
        if (item !== navItem) item.classList.remove("active");
      });

      // toggle this one
      navItem.classList.toggle("active");
    });
  });

  // close when clicking outside
  document.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-item.active")
      .forEach((item) => item.classList.remove("active"));
  });
  // ----------------------
  // Mobile Menu Toggle
  // ----------------------
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  // ----------------------
  // Page Fade-In / Fade-Out
  // ----------------------
  function showPage() {
    document.body.classList.add("loaded");
  }

  showPage();

  window.addEventListener("pageshow", (event) => {
    if (event.persisted) showPage();
  });

  document.querySelectorAll("a[href]").forEach((link) => {
    if (!link.href.includes("#") && !link.target) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const url = link.href;
        document.body.classList.remove("loaded");
        setTimeout(() => (window.location = url), 300);
      });
    }
  });
});

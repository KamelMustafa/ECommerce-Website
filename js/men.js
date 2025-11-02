// men.js

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

  // 🔹 Normalize helper to fix mismatches (case, spaces, plural)
  const normalize = (str) => str?.toLowerCase().replace(/\s+/g, "").trim();

  // 🔹 Apply filter
  const applyFilter = (filter) => {
    const normalizedFilter = normalize(filter);

    // Update active button
    buttons.forEach((btn) => {
      const btnFilter = normalize(
        btn.getAttribute("data-filter") || btn.textContent
      );
      btn.classList.toggle("active", btnFilter === normalizedFilter);
    });

    // Filter products
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

  // 🔹 Add click listeners
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter") || btn.textContent;
      applyFilter(filter);
    });
  });

  // 🔹 Read filter from URL (?filter=shirts)
  const params = new URLSearchParams(window.location.search);
  const urlFilter = params.get("filter");
  if (urlFilter) {
    applyFilter(urlFilter);
  } else {
    applyFilter("all");
  }
});

// ----------------------
// Scroll animation setup
// ----------------------

const lenis = new Lenis({
  autoRaf: true,
});

// Prevent Lenis from handling horizontal sliders
const sliders = document.querySelectorAll(".slider");
sliders.forEach((slider) => {
  slider.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.stopPropagation(); // stops Lenis from touching it
    }
  });
});

// Listen for scroll event (for debugging / testing)
lenis.on("scroll", (e) => {
  console.log(e);
});

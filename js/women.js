// women.js

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

  const normalize = (str) => str?.toLowerCase().replace(/\s+/g, "").trim();

  const applyFilter = (filter) => {
    const normalizedFilter = normalize(filter);

    buttons.forEach((btn) => {
      const btnFilter = normalize(
        btn.getAttribute("data-filter") || btn.textContent
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
});

// Scroll animation
const lenis = new Lenis({
  autoRaf: true,
});

const sliders = document.querySelectorAll(".slider");
sliders.forEach((slider) => {
  slider.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.stopPropagation();
    }
  });
});

lenis.on("scroll", (e) => {
  console.log(e);
});

// Ensure page becomes visible again when loaded or returned to
function showPage() {
  document.body.classList.add("loaded");
}

// When first loaded
document.addEventListener("DOMContentLoaded", showPage);

// When user navigates back (from cache)
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    showPage();
  }
});

// Smooth fade transition on link clicks
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

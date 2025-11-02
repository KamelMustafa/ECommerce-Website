// Slider
const slider = document.querySelector(".slider");

function getSlideWidth() {
  const slide = slider.querySelector(".slide");
  const style = getComputedStyle(slide);
  return slide.offsetWidth + parseInt(style.marginRight);
}
// scroll animation
// Initialize Lenis
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

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});

// Categories
const categories = {
  "men-shirts": {
    title: "Men’s Shirts",
    products: [
      {
        name: "Beige Linen Shirt",
        price: "$79",
        img: "images/72295304-c6b6-4d86-843d-0cf39fa3314b.jpeg",
      },
      {
        name: "Textured Polo",
        price: "$69",
        img: "images/25db8763-ed06-486c-b207-dea6a8879916.jpeg",
      },
      {
        name: "Minimal Black Tee",
        price: "$49",
        img: "images/ae2f2e55-0d62-44b9-9af6-5c7d79442c57.jpeg",
      },
      {
        name: "Neutral Hoodie",
        price: "$89",
        img: "images/e15c4de3-b86d-4b9e-8e48-4a6bc311cb08.jpeg",
      },
    ],
  },
  "women-tops": {
    title: "Women’s Tops",
    products: [
      { name: "Silk Relax Top", price: "$79", img: "images/womentop1.jpeg" },
      { name: "Neutral Crop Tee", price: "$59", img: "images/womentop2.jpeg" },
    ],
  },
};

const mainContent = document.getElementById("mainContent");
const categoryPage = document.getElementById("categoryPage");
const categoryGrid = document.getElementById("categoryGrid");
const categoryTitle = document.querySelector(".category-title");
const backBtn = document.getElementById("backBtn");

// Load category (simulate new page)
function openCategory(key) {
  const category = categories[key];
  if (!category) return;

  categoryTitle.textContent = category.title;
  categoryGrid.innerHTML = category.products
    .map(
      (p) => `
      <div class="product-card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
      </div>
    `
    )
    .join("");

  // Animate transition
  mainContent.classList.add("hidden");
  setTimeout(() => {
    mainContent.style.display = "none";
    categoryPage.classList.add("active");
  }, 400);
}

// Go back to main
backBtn.addEventListener("click", () => {
  categoryPage.classList.remove("active");
  setTimeout(() => {
    mainContent.style.display = "block";
    requestAnimationFrame(() => {
      mainContent.classList.remove("hidden");
    });
  }, 400);
});

// Dropdown link click
document.querySelectorAll(".dropdown a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const cat = e.target.textContent.toLowerCase();
    const parent = e.target
      .closest(".nav-item")
      .querySelector(".nav-trigger a")
      .textContent.toLowerCase();
    openCategory(`${parent}-${cat}`);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdownLinks = document.querySelectorAll(".dropdown a");

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const filterText = link.textContent.trim().toLowerCase();
      const parentNav = link.closest(".nav-item");

      if (!parentNav) return;

      const triggerLink = parentNav.querySelector(".nav-trigger a");
      if (!triggerLink) return;

      const baseHref = triggerLink.getAttribute("href");
      if (!baseHref) return;

      // Normalize the filter name for consistency
      const normalized = filterText
        .replace(/\s+/g, "")
        .replace("bestsellers", "bestseller");

      // Build the new URL (e.g. men.html?filter=shirts)
      const newUrl = `${baseHref}?filter=${encodeURIComponent(normalized)}`;

      // Redirect
      window.location.href = newUrl;
    });
  });
});

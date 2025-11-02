<<<<<<< HEAD
// js/item.js

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const itemId = params.get("id");

  const itemImage = document.querySelector(".item-image img");
  const itemTitle = document.querySelector(".item-title");
  const itemDesc = document.querySelector(".item-desc");
  const itemPrice = document.querySelector(".price");

  // 🧠 All product data from index.html, men.html, and women.html
  const allItems = [
    // ===== INDEX ITEMS =====
    {
      id: 10,
      title: "Freedom T-Shirt",
      desc: "Natural fabric • Heavy",
      price: "$55",
      img: "images/1288f43b-d980-4644-a86b-48549ea91deb.jpeg",
    },
    {
      id: 11,
      title: "The Journey Hoodi",
      desc: "Natural fabric • Heavy",
      price: "$75",
      img: "images/25db8763-ed06-486c-b207-dea6a8879916.jpeg",
    },
    {
      id: 12,
      title: "Black Linen Suite",
      desc: "Relaxed tailoring • Breathable linen",
      price: "$110",
      img: "images/72295304-c6b6-4d86-843d-0cf39fa3314b.jpeg",
    },
    {
      id: 13,
      title: "High Wiest",
      desc: "Heavy cotton • Clean minimal design",
      price: "$60",
      img: "images/ae2f2e55-0d62-44b9-9af6-5c7d79442c57.jpeg",
    },
    {
      id: 14,
      title: "Creator T-Shirt",
      desc: "Relaxed fit • Subtle texture",
      price: "$65",
      img: "images/Instagram.jpeg",
    },
    {
      id: 15,
      title: "Not From This World T-Shirt",
      desc: "Soft cotton blend • Heavy",
      price: "$70",
      img: "images/Lookbook_Visionaries – eightyfiveclo _ Graphic shirt design, Cool shirt designs, S___.jpeg",
    },
    {
      id: 16,
      title: "Hotel Printed T-Shirt",
      desc: "Slim profile • Refined summer layer",
      price: "$68",
      img: "images/masaaki-komori-9ugEeqflo70-unsplash.jpg",
    },
    {
      id: 17,
      title: "Brown Coat",
      desc: "Structured fleece • Refined comfort",
      price: "$130",
      img: "images/Elevate your fall wardrobe with this Elegant Black….jpeg",
    },
    {
      id: 18,
      title: "Neutral Oversized Hoodie",
      desc: "Soft brushed cotton • Relaxed fit",
      price: "$90",
      img: "images/Hoodies & Sweatshirts by ASOS DESIGN Act casual….jpeg",
    },
    {
      id: 19,
      title: "Too many Thoughts Hoodie",
      desc: "French terry • Elevated everyday layer",
      price: "$95",
      img: "images/e15c4de3-b86d-4b9e-8e48-4a6bc311cb08.jpeg",
    },
    {
      id: 20,
      title: "White Polo",
      desc: "Heavy cotton fleece • Modern relaxed fit",
      price: "$80",
      img: "images/7a1eaab9-bdf8-46a5-9f1f-a9209a25bc80.jpeg",
    },
    {
      id: 21,
      title: "Stone Knit Cardigan",
      desc: "Soft rib knit • Refined drape",
      price: "$85",
      img: "images/Męski luźny kardigan w jednolitym kolorze, z….jpeg",
    },

    // ===== MEN ITEMS =====
    {
      id: 30,
      title: "Minimal Black Tee",
      desc: "Refined cotton tee with clean lines.",
      price: "$45",
      img: "images/ae2f2e55-0d62-44b9-9af6-5c7d79442c57.jpeg",
    },
    {
      id: 31,
      title: "Brown Suede Jacket",
      desc: "Warm and stylish with faux fur lining.",
      price: "$120",
      img: "images/Men's Solid Brown Suede Faux Fur Jacket, Autumn….jpeg",
    },
    {
      id: 32,
      title: "Beige Linen Shirt",
      desc: "Lightweight linen for effortless style.",
      price: "$65",
      img: "images/1288f43b-d980-4644-a86b-48549ea91deb.jpeg",
    },
    {
      id: 33,
      title: "Stone Knit Polo",
      desc: "Casual comfort meets refined detail.",
      price: "$70",
      img: "images/Instagram.jpeg",
    },
    {
      id: 34,
      title: "Neutral Oversized Hoodie",
      desc: "Relaxed fit with cozy fleece interior.",
      price: "$90",
      img: "images/e15c4de3-b86d-4b9e-8e48-4a6bc311cb08.jpeg",
    },
    {
      id: 35,
      title: "Charcoal Polo",
      desc: "Soft touch with elegant structure.",
      price: "$65",
      img: "images/masaaki-komori-9ugEeqflo70-unsplash.jpg",
    },
    {
      id: 36,
      title: "Cream Button-Down",
      desc: "Versatile everyday shirt.",
      price: "$60",
      img: "images/Lookbook_Visionaries – eightyfiveclo _ Graphic shirt design, Cool shirt designs, S___.jpeg",
    },
    {
      id: 37,
      title: "Off-White Overshirt",
      desc: "Subtle texture and modern cut.",
      price: "$75",
      img: "images/72295304-c6b6-4d86-843d-0cf39fa3314b.jpeg",
    },
    {
      id: 38,
      title: "Sand Textured Hoodie",
      desc: "Relaxed fit with soft cotton feel.",
      price: "$85",
      img: "images/Hoodies & Sweatshirts by ASOS DESIGN Act casual….jpeg",
    },
    {
      id: 39,
      title: "Textured Polo",
      desc: "Premium knit for a clean finish.",
      price: "$70",
      img: "images/25db8763-ed06-486c-b207-dea6a8879916.jpeg",
    },

    // ===== WOMEN ITEMS =====
    {
      id: 50,
      title: "Beige Linen Blouse",
      desc: "Soft texture • Relaxed silhouette",
      price: "$60",
      img: "images/undefined (1).jpeg",
    },
    {
      id: 51,
      title: "White Knit Tank",
      desc: "Ribbed texture • Minimal fit",
      price: "$45",
      img: "images/undefined (2).jpeg",
    },
    {
      id: 52,
      title: "Neutral Pleated Trousers",
      desc: "Soft drape • Tailored waist",
      price: "$70",
      img: "images/undefined (3).jpeg",
    },
    {
      id: 53,
      title: "Black High-Waist Pants",
      desc: "Structured fit • Everyday essential",
      price: "$80",
      img: "images/undefined (4).jpeg",
    },
    {
      id: 54,
      title: "Minimal Leather Bag",
      desc: "Matte finish • Subtle hardware",
      price: "$90",
      img: "images/undefined (5).jpeg",
    },
    {
      id: 55,
      title: "Stone Bracelet",
      desc: "Natural tone • Handmade finish",
      price: "$35",
      img: "images/undefined (6).jpeg",
    },
    {
      id: 56,
      title: "Ivory Overshirt",
      desc: "Cotton blend • Relaxed form",
      price: "$65",
      img: "images/undefined (7).jpeg",
    },
    {
      id: 57,
      title: "Sand Relaxed Skirt",
      desc: "Flowy fabric • Calm tone",
      price: "$75",
      img: "images/undefined (8).jpeg",
    },
    {
      id: 58,
      title: "Linen Tote Bag",
      desc: "Textured weave • Everyday style",
      price: "$50",
      img: "images/undefined.jpeg",
    },
    {
      id: 59,
      title: "Everyday Linen Tote",
      desc: "Textured weave • Everyday style",
      price: "$55",
      img: "images/Finding Elegance in Simplicity_ My Go-To Minimalist Outfits.jpeg",
    },
  ];

  // 🧩 Find the item by ID
  const item = allItems.find((i) => i.id == itemId);

  if (item) {
    itemImage.src = item.img;
    itemTitle.textContent = item.title;
    itemDesc.textContent = item.desc;
    itemPrice.textContent = item.price;
  } else {
    itemTitle.textContent = "Item Not Found";
    itemDesc.textContent =
      "Sorry, we couldn’t locate the product you’re looking for.";
    itemImage.src = "images/placeholder.png";
    itemPrice.textContent = "$0.00";
  }
});

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
=======
// js/item.js

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const itemId = params.get("id");

  const itemImage = document.querySelector(".item-image img");
  const itemTitle = document.querySelector(".item-title");
  const itemDesc = document.querySelector(".item-desc");
  const itemPrice = document.querySelector(".price");

  // 🧠 All product data from index.html, men.html, and women.html
  const allItems = [
    // ===== INDEX ITEMS =====
    {
      id: 10,
      title: "Freedom T-Shirt",
      desc: "Natural fabric • Heavy",
      price: "$55",
      img: "images/1288f43b-d980-4644-a86b-48549ea91deb.jpeg",
    },
    {
      id: 11,
      title: "The Journey Hoodi",
      desc: "Natural fabric • Heavy",
      price: "$75",
      img: "images/25db8763-ed06-486c-b207-dea6a8879916.jpeg",
    },
    {
      id: 12,
      title: "Black Linen Suite",
      desc: "Relaxed tailoring • Breathable linen",
      price: "$110",
      img: "images/72295304-c6b6-4d86-843d-0cf39fa3314b.jpeg",
    },
    {
      id: 13,
      title: "High Wiest",
      desc: "Heavy cotton • Clean minimal design",
      price: "$60",
      img: "images/ae2f2e55-0d62-44b9-9af6-5c7d79442c57.jpeg",
    },
    {
      id: 14,
      title: "Creator T-Shirt",
      desc: "Relaxed fit • Subtle texture",
      price: "$65",
      img: "images/Instagram.jpeg",
    },
    {
      id: 15,
      title: "Not From This World T-Shirt",
      desc: "Soft cotton blend • Heavy",
      price: "$70",
      img: "images/Lookbook_Visionaries – eightyfiveclo _ Graphic shirt design, Cool shirt designs, S___.jpeg",
    },
    {
      id: 16,
      title: "Hotel Printed T-Shirt",
      desc: "Slim profile • Refined summer layer",
      price: "$68",
      img: "images/masaaki-komori-9ugEeqflo70-unsplash.jpg",
    },
    {
      id: 17,
      title: "Brown Coat",
      desc: "Structured fleece • Refined comfort",
      price: "$130",
      img: "images/Elevate your fall wardrobe with this Elegant Black….jpeg",
    },
    {
      id: 18,
      title: "Neutral Oversized Hoodie",
      desc: "Soft brushed cotton • Relaxed fit",
      price: "$90",
      img: "images/Hoodies & Sweatshirts by ASOS DESIGN Act casual….jpeg",
    },
    {
      id: 19,
      title: "Too many Thoughts Hoodie",
      desc: "French terry • Elevated everyday layer",
      price: "$95",
      img: "images/e15c4de3-b86d-4b9e-8e48-4a6bc311cb08.jpeg",
    },
    {
      id: 20,
      title: "White Polo",
      desc: "Heavy cotton fleece • Modern relaxed fit",
      price: "$80",
      img: "images/7a1eaab9-bdf8-46a5-9f1f-a9209a25bc80.jpeg",
    },
    {
      id: 21,
      title: "Stone Knit Cardigan",
      desc: "Soft rib knit • Refined drape",
      price: "$85",
      img: "images/Męski luźny kardigan w jednolitym kolorze, z….jpeg",
    },

    // ===== MEN ITEMS =====
    {
      id: 30,
      title: "Minimal Black Tee",
      desc: "Refined cotton tee with clean lines.",
      price: "$45",
      img: "images/ae2f2e55-0d62-44b9-9af6-5c7d79442c57.jpeg",
    },
    {
      id: 31,
      title: "Brown Suede Jacket",
      desc: "Warm and stylish with faux fur lining.",
      price: "$120",
      img: "images/Men's Solid Brown Suede Faux Fur Jacket, Autumn….jpeg",
    },
    {
      id: 32,
      title: "Beige Linen Shirt",
      desc: "Lightweight linen for effortless style.",
      price: "$65",
      img: "images/1288f43b-d980-4644-a86b-48549ea91deb.jpeg",
    },
    {
      id: 33,
      title: "Stone Knit Polo",
      desc: "Casual comfort meets refined detail.",
      price: "$70",
      img: "images/Instagram.jpeg",
    },
    {
      id: 34,
      title: "Neutral Oversized Hoodie",
      desc: "Relaxed fit with cozy fleece interior.",
      price: "$90",
      img: "images/e15c4de3-b86d-4b9e-8e48-4a6bc311cb08.jpeg",
    },
    {
      id: 35,
      title: "Charcoal Polo",
      desc: "Soft touch with elegant structure.",
      price: "$65",
      img: "images/masaaki-komori-9ugEeqflo70-unsplash.jpg",
    },
    {
      id: 36,
      title: "Cream Button-Down",
      desc: "Versatile everyday shirt.",
      price: "$60",
      img: "images/Lookbook_Visionaries – eightyfiveclo _ Graphic shirt design, Cool shirt designs, S___.jpeg",
    },
    {
      id: 37,
      title: "Off-White Overshirt",
      desc: "Subtle texture and modern cut.",
      price: "$75",
      img: "images/72295304-c6b6-4d86-843d-0cf39fa3314b.jpeg",
    },
    {
      id: 38,
      title: "Sand Textured Hoodie",
      desc: "Relaxed fit with soft cotton feel.",
      price: "$85",
      img: "images/Hoodies & Sweatshirts by ASOS DESIGN Act casual….jpeg",
    },
    {
      id: 39,
      title: "Textured Polo",
      desc: "Premium knit for a clean finish.",
      price: "$70",
      img: "images/25db8763-ed06-486c-b207-dea6a8879916.jpeg",
    },

    // ===== WOMEN ITEMS =====
    {
      id: 50,
      title: "Beige Linen Blouse",
      desc: "Soft texture • Relaxed silhouette",
      price: "$60",
      img: "images/undefined (1).jpeg",
    },
    {
      id: 51,
      title: "White Knit Tank",
      desc: "Ribbed texture • Minimal fit",
      price: "$45",
      img: "images/undefined (2).jpeg",
    },
    {
      id: 52,
      title: "Neutral Pleated Trousers",
      desc: "Soft drape • Tailored waist",
      price: "$70",
      img: "images/undefined (3).jpeg",
    },
    {
      id: 53,
      title: "Black High-Waist Pants",
      desc: "Structured fit • Everyday essential",
      price: "$80",
      img: "images/undefined (4).jpeg",
    },
    {
      id: 54,
      title: "Minimal Leather Bag",
      desc: "Matte finish • Subtle hardware",
      price: "$90",
      img: "images/undefined (5).jpeg",
    },
    {
      id: 55,
      title: "Stone Bracelet",
      desc: "Natural tone • Handmade finish",
      price: "$35",
      img: "images/undefined (6).jpeg",
    },
    {
      id: 56,
      title: "Ivory Overshirt",
      desc: "Cotton blend • Relaxed form",
      price: "$65",
      img: "images/undefined (7).jpeg",
    },
    {
      id: 57,
      title: "Sand Relaxed Skirt",
      desc: "Flowy fabric • Calm tone",
      price: "$75",
      img: "images/undefined (8).jpeg",
    },
    {
      id: 58,
      title: "Linen Tote Bag",
      desc: "Textured weave • Everyday style",
      price: "$50",
      img: "images/undefined.jpeg",
    },
    {
      id: 59,
      title: "Everyday Linen Tote",
      desc: "Textured weave • Everyday style",
      price: "$55",
      img: "images/Finding Elegance in Simplicity_ My Go-To Minimalist Outfits.jpeg",
    },
  ];

  // 🧩 Find the item by ID
  const item = allItems.find((i) => i.id == itemId);

  if (item) {
    itemImage.src = item.img;
    itemTitle.textContent = item.title;
    itemDesc.textContent = item.desc;
    itemPrice.textContent = item.price;
  } else {
    itemTitle.textContent = "Item Not Found";
    itemDesc.textContent =
      "Sorry, we couldn’t locate the product you’re looking for.";
    itemImage.src = "images/placeholder.png";
    itemPrice.textContent = "$0.00";
  }
});

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
>>>>>>> a9bd756fb86285a6db73f7db229d8367e9039a33

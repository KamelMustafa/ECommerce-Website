document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  const text = document.querySelector(".loader-text");

  // Trigger initial animation
  setTimeout(() => loader.classList.add("active"), 100); // Line grows
  setTimeout(() => loader.classList.add("reveal"), 1000); // Text fades in
  setTimeout(() => {
    loader.classList.add("fade-out");
    setTimeout(() => loader.remove(), 600);
  }, 1800); // Hide loader after animation
});

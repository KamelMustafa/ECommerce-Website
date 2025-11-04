document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");

  // Check if the loader has already been shown in this session
  const loaderShown = sessionStorage.getItem("loaderShown");

  if (!loaderShown) {
    // Run loader only once
    const text = document.querySelector(".loader-text");

    setTimeout(() => loader.classList.add("active"), 100);
    setTimeout(() => loader.classList.add("reveal"), 1000);
    setTimeout(() => {
      loader.classList.add("fade-out");
      setTimeout(() => loader.remove(), 600);
    }, 1800);

    // Mark loader as shown
    sessionStorage.setItem("loaderShown", "true");
  } else {
    // Immediately hide loader on subsequent page loads
    loader.style.display = "none";
  }
});

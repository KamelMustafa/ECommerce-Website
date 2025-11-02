// Fade in on load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("accountWrap").classList.add("visible");
});

// Tabs toggle
const tabSignIn = document.getElementById("tab-signin");
const tabSignUp = document.getElementById("tab-signup");
const formSignIn = document.getElementById("form-signin");
const formSignUp = document.getElementById("form-signup");

function showSignIn() {
  tabSignIn.classList.add("active");
  tabSignUp.classList.remove("active");
  formSignIn.style.display = "block";
  formSignUp.style.display = "none";
}

function showSignUp() {
  tabSignUp.classList.add("active");
  tabSignIn.classList.remove("active");
  formSignIn.style.display = "none";
  formSignUp.style.display = "block";
}

tabSignIn.addEventListener("click", showSignIn);
tabSignUp.addEventListener("click", showSignUp);

// Password toggle
document.querySelectorAll(".pw-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = document.getElementById(btn.dataset.target);
    if (!input) return;
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    btn.textContent = isHidden ? "Hide" : "Show";
  });
});

// Validation and feedback
function setError(el, msg, success = false) {
  el.textContent = msg;
  el.style.color = success ? "#b7ffca" : "#ffb3b3";
  el.hidden = false;
  setTimeout(() => (el.hidden = true), 1500);
}

document.getElementById("form-signin").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("si-email").value.trim();
  const pw = document.getElementById("si-password").value.trim();
  const err = document.getElementById("si-error");
  if (!email || !pw) return setError(err, "Please enter email and password.");
  setError(err, "Signed in — redirecting...", true);
});

document.getElementById("form-signup").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("su-email").value.trim();
  const pw = document.getElementById("su-password").value.trim();
  const err = document.getElementById("su-error");
  if (!email || !pw) return setError(err, "Please fill all required fields.");
  setError(err, "Account created — welcome!", true);
  setTimeout(showSignIn, 1000);
});

// Guest & forgot (placeholder)
document
  .getElementById("guestBtn")
  .addEventListener("click", () =>
    alert("Continue as guest — integrate flow.")
  );
document.getElementById("cancelSignup").addEventListener("click", showSignIn);
document.getElementById("forgotLink").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Initiate password recovery flow.");
});

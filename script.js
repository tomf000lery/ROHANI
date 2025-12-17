// Newsletter alert
document.querySelector(".newsletter").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for signing up!");
});

// Smooth scroll away top bar
window.addEventListener("scroll", () => {
  const hero = document.getElementById("hero");
  const scrollY = window.scrollY;
  hero.style.transform = `translateY(-${scrollY * 0.5}px)`; // slides up smoothly
});

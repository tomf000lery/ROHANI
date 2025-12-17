// Newsletter alert
document.querySelector(".newsletter").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for signing up!");
});

// Top bar slides up after tagline scroll
const hero = document.getElementById("hero");
const tagline = document.getElementById("tagline");

window.addEventListener("scroll", () => {
  const taglineBottom = tagline.getBoundingClientRect().bottom;
  if(taglineBottom < 0) {
    hero.style.transform = "translateY(-100%)";
  } else {
    hero.style.transform = "translateY(0)";
  }
});

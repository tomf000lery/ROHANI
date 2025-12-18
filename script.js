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

function fitTagline() {
  const tagline = document.querySelector('.tagline');
  const containerWidth = window.innerWidth * 0.88; // leave side breathing room

  tagline.style.fontSize = '10px'; // reset
  const textWidth = tagline.scrollWidth;

  const scale = containerWidth / textWidth;
  tagline.style.fontSize = `${10 * scale}px`;
}

window.addEventListener('load', fitTagline);
window.addEventListener('resize', fitTagline);

window.addEventListener('scroll', () => {
  const tagline = document.querySelector('.tagline');
  const scrollY = window.scrollY;

  const scale = Math.max(0.85, 1 - scrollY / 1200);
  tagline.style.transform = `scale(${scale})`;
});

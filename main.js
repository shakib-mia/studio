
const navbar = document.getElementById("navbar");
console.log(navbar);
// const navContent = document.getElementById("nav-content");
navbar.style.position = "fixed";
navbar.style.top = 0;

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = Lenis.scroll || window.pageYOffset; // Using Lenis scroll

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;
    // console.log(navbar.children);
    // console.log(scrollDirection);
    // Hide navbar on scroll down
    if (scrollDirection === "down") {
      navbar.style.top = "-10rem";
      navbar.style.transition = "all 0.5s ease";
    } else {
      if (currentScrollY > 0) {
        navbar.style.top = "0";
        navbar.style.boxShadow = "0 0 20px 0 #2B245D21";
        navbar.children[0].style.backgroundColor = '#0B0A1F'
        navbar.style.backgroundColor = '#0B0A1F'
      } else {
        navbar.style.top = `${0}px`;
        navbar.style.boxShadow = "none";
        navbar.style.transition = "all 0.5s ease";
        navbar.children[0].style.backgroundColor = '#0B0A1F00'
        navbar.style.backgroundColor = '#0B0A1F00'

      }
    }

    // Box shadow and fixed position on scroll
    if (currentScrollY > 0) {
      // navContent.style.boxShadow = "0 0 20px 0 #2B245D21";
      // navContent.style.position = "fixed";
    } else {
      // navContent.style.boxShadow = "none";
    }
  }

  // Listen to scroll events
  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();


// Apply language and UI state
function applyLanguage(lang) {
  document.documentElement.lang = lang;

  // Move ball
  const toggleBall = document.getElementById("toggleBall");
  toggleBall.style.transform = lang === "en" ? "translateX(0)" : "translateX(48px)";
}

// Handle toggle click
function toggleLanguage() {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === "en" ? "bn" : "en";

  localStorage.setItem("language", newLang);
  applyLanguage(newLang);
}

// On load: get saved lang
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  applyLanguage(savedLang);
});

// Add toggle click listener
document.getElementById("toggleButton").addEventListener("click", toggleLanguage);
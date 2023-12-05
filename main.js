function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top;
}

// Add a flag to track whether counting has started
let countingStarted = false;

window.addEventListener("scroll", () => {
  const targetElement = document.querySelector("#stat-container");

  if (
    isElementInViewport(targetElement) <= window.innerHeight &&
    !countingStarted
  ) {
    countingStarted = true;
    startCounting("project-count", 250, 10);
    startCounting("clients-count", 150, 10);
    startCounting("experience-count", 10, 100);
  } else if (!isElementInViewport(targetElement)) {
    // Reset the flag when the element goes out of the viewport
    countingStarted = false;
    console.log("Element is not in the viewport.");
    // Do something when the element is not in the viewport
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var scrollButton = document.getElementById("cta-button");

  scrollButton.addEventListener("click", function (e) {
    // Scroll down by 100vh
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });

  // Check scroll position to hide button at the bottom
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var viewportHeight = window.innerHeight;

    if (scrollPosition > document.body.scrollHeight - viewportHeight - 100) {
      scrollButton.classList.add("opacity-0");
    } else {
      scrollButton.classList.remove("opacity-0");
    }
  });
});

function startCounting(id, count, time) {
  let counterValue = 0;
  let intervalId;

  function updateCounter() {
    const counterElement = document.getElementById(id);
    if (counterElement) {
      counterElement.textContent = counterValue;
    }
  }

  intervalId = setInterval(() => {
    counterValue++;
    updateCounter();

    if (counterValue === count) {
      clearInterval(intervalId);
    }
  }, time);
}

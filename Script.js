// Script.js

// Function to toggle the mobile menu
function MenuShow() {
  document.getElementById("responsive_div").classList.toggle("hidden");
}

// --- Image Paths for Company Cards ---
const companyImagePaths = [];
for (let i = 4; i <= 27; i++) {
  const assetNum = i - 1;
  companyImagePaths.push(`../assets/imgi_${i}_asset ${assetNum}.png`);
}

/**
 * Generates the HTML string for a single company card with a specific image.
 * Now includes the 'company-card' class for custom styling.
 * @param {string} imagePath The full path to the image.
 * @param {string} companyName The name to display below the logo.
 * @returns {string} The HTML string for the card.
 */
function createCardHtml(imagePath, companyName = "company") {
  return `
    <div class="flex p-3 flex-col h-20 w-20 justify-center bg-white outline-1 outline-slate-500 rounded-lg company-card">
      <img src="${imagePath}" alt="${companyName} logo" class="size-8 md:size-12" />
      <p>${companyName}</p>
    </div>
  `;
}

function populateLine(lineId, numberOfCards) {
  const lineElement = document.getElementById(lineId);
  if (!lineElement) return;

  let cardsHtml = "";
  for (let i = 0; i < numberOfCards; i++) {
    const imageIndex = i % companyImagePaths.length;
    const currentImagePath = companyImagePaths[imageIndex];
    const dynamicCompanyName = `App ${i + 1}`;

    cardsHtml += createCardHtml(currentImagePath, dynamicCompanyName);
  }
  lineElement.innerHTML = cardsHtml;
}

// --- Scroll Effect Logic (Restored Parallax) ---

/**
 * Sets up an Intersection Observer and scroll-based parallax for an element.
 * @param {HTMLElement} el The DOM element to observe and animate.
 * @param {number} initialX The initial X-transform value in pixels when out of view (e.g., -200 for left, 200 for right).
 * @param {number} speed The parallax speed multiplier. Positive for movement with scroll (e.g., right for LTR), negative for opposite.
 */
function setupScrollParallax(el, initialX, speed) {
  if (!el) {
    console.warn(`Element for parallax not found.`);
    return;
  }

  let inView = false; // Tracks if the element is currently intersecting the viewport.

  const updateParallax = () => {
    if (!inView) return;

    const rect = el.getBoundingClientRect();
    const offset = window.innerHeight - rect.top;
    const translateX = initialX + offset * speed;

    el.style.transform = `translateX(${translateX}px)`;
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      inView = entry.isIntersecting;

      if (inView) {
        el.style.opacity = "1"; // Make it fully visible
        updateParallax(); // Set initial position when entering view
        window.addEventListener("scroll", updateParallax); // Start listening to window scroll
        window.addEventListener("resize", updateParallax); // Adjust on resize
      } else {
        // When leaving view, remove listeners and reset position for next animation
        window.removeEventListener("scroll", updateParallax);
        window.removeEventListener("resize", updateParallax);
        el.style.opacity = "0"; // Hide it
        el.style.transform = `translateX(${initialX}px)`; // Reset transform
      }
    },
    {
      threshold: 0, // Trigger as soon as any part of the element enters/leaves
      rootMargin: "0px 0px -50px 0px", // Gives a little buffer at the bottom
    }
  );

  // Set initial state before observation starts to prevent FOUC (flash of unstyled content)
  el.style.opacity = "0";
  el.style.transform = `translateX(${initialX}px)`;
  // Add a transition property for smooth movement.
  el.style.transition = `transform 0.1s linear, opacity 0.3s ease-out`;

  observer.observe(el);
}

// --- DOM Content Loaded and Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // Populate company lines with cards (using the new image range)
  populateLine("line1", 14);
  populateLine("line2", 14);
  populateLine("line3", 14);

  // Get the elements after they are populated
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");
  const line4 = document.getElementById("line4");

  // Setup parallax for each line
  // Adjust initialX (where it starts) and speed (how fast it moves)
  if (line1) setupScrollParallax(line1, -200, 0.23); // Moves from left, faster
  if (line2) setupScrollParallax(line2, 200, -0.23); // Moves from right, faster
  if (line3) setupScrollParallax(line3, -300, 0.18);
  if (line4) setupScrollParallax(line4, -300, 0.67);
  // Moves from left, slightly slower, starts further left
});

  function toggleFAQ(element) {
    const icon = element.querySelector("i");
    const content = element.nextElementSibling;

    icon.classList.toggle("rotate-180");
    content.classList.toggle("hidden");
  }

"use strict";

// Continuously zoom an inclined grid. Nested spacings crossfade at each octave,
// so the background never jumps back to a visibly smaller grid at a loop edge.
(() => {
  const canvas = document.querySelector("canvas.paper-grid");
  const context = canvas?.getContext("2d");
  if (!context) return;

  const motionPreference = matchMedia("(prefers-reduced-motion: reduce)");
  const cycleSeconds = 14;
  const smallestSpacing = 12;
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let frameId = 0;
  let elapsed = 0;
  let previousTime = null;
  let lastPaint = -Infinity;

  function easeBetween(value, start, end) {
    const t = Math.max(0, Math.min(1, (value - start) / (end - start)));
    return t * t * (3 - 2 * t);
  }

  function paint() {
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.clearRect(0, 0, width, height);
    context.translate(width / 2, height / 2);
    context.rotate((-14 * Math.PI) / 180);
    context.lineWidth = 1 / pixelRatio;

    const radius = Math.hypot(width, height) / 2 + 2;
    const zoom = Math.pow(2, (elapsed / cycleSeconds) % 1);
    for (
      let spacing = smallestSpacing * zoom;
      spacing < radius * 4;
      spacing *= 2
    ) {
      const fadeIn = easeBetween(spacing, smallestSpacing, 72);
      const fadeOut = 1 - 0.6 * easeBetween(spacing, 400, 1600);
      const alpha = 0.085 * fadeIn * fadeOut;
      if (alpha < 0.002) continue;
      context.strokeStyle = `rgba(70, 77, 57, ${alpha})`;
      context.beginPath();
      const count = Math.ceil(radius / spacing);
      for (let line = -count; line <= count; line++) {
        const position = line * spacing;
        context.moveTo(position, -radius);
        context.lineTo(position, radius);
        context.moveTo(-radius, position);
        context.lineTo(radius, position);
      }
      context.stroke();
    }
  }

  function fitViewport() {
    width = window.innerWidth;
    height = window.innerHeight;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    paint();
  }

  function animate(time) {
    if (previousTime !== null) elapsed += (time - previousTime) / 1000;
    previousTime = time;
    // A slow decorative background only needs 30 paints per second.
    if (time - lastPaint >= 1000 / 30) {
      paint();
      lastPaint = time;
    }
    frameId = requestAnimationFrame(animate);
  }

  function syncPlayback() {
    cancelAnimationFrame(frameId);
    previousTime = null;
    lastPaint = -Infinity;
    if (!motionPreference.matches && !document.hidden) {
      frameId = requestAnimationFrame(animate);
    } else {
      paint();
    }
  }

  window.addEventListener("resize", fitViewport, { passive: true });
  document.addEventListener("visibilitychange", syncPlayback);
  motionPreference.addEventListener("change", syncPlayback);
  fitViewport();
  syncPlayback();
})();

// Native dialog handles focus trapping and Escape, including keyboard-only use.
const lightbox = document.querySelector(".lightbox");
const preview = lightbox.querySelector(".lightbox-image");
const caption = document.getElementById("image-caption");
let lastImageButton;

function closePreview() {
  lightbox.close();
}

document.querySelectorAll("[data-image]").forEach((button) => {
  button.addEventListener("click", () => {
    lastImageButton = button;
    const image = button.querySelector("img");
    preview.src = button.dataset.image;
    preview.alt = image.alt;
    caption.textContent = image.alt.replace("华师教务宣传图：", "");
    lightbox.showModal();
    document.body.classList.add("modal-open");
  });
});

lightbox
  .querySelector(".close-lightbox")
  .addEventListener("click", closePreview);
lightbox.addEventListener("click", (event) => {
  const bounds = lightbox.getBoundingClientRect();
  if (
    event.target === lightbox &&
    (event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom)
  )
    closePreview();
});
lightbox.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  lastImageButton?.focus({ preventScroll: true });
});

// Mark the last section whose heading has crossed the upper reading boundary.
const sectionLinks = [...document.querySelectorAll(".contents nav a")];
const sections = sectionLinks.map((link) => document.querySelector(link.hash));
let scheduled = false;
function updateContents() {
  let active = -1;
  sections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.35)
      active = index;
  });
  sectionLinks.forEach((link, index) => {
    if (index === active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scheduled = false;
}
window.addEventListener(
  "scroll",
  () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateContents);
    }
  },
  { passive: true },
);
window.addEventListener("resize", updateContents);
updateContents();

const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

// Get width of one slide regardless of browser's width
const slideWidth = slides[0].getBoundingClientRect().width;

// Set Slides according to its index on the X plane
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

// Slide Engine
const slideToMove = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// Dots Engine
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

// Chevron Engine
const updateChevron = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};

// Previous Button
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const previousSlide = currentSlide.previousElementSibling;

  const currentDot = dotsNav.querySelector(".current-slide");
  const previousDot = currentDot.previousElementSibling;

  const previousIndex = slides.findIndex((slide) => slide === previousSlide);

  slideToMove(track, currentSlide, previousSlide);
  updateDots(currentDot, previousDot);

  updateChevron(slides, prevButton, nextButton, previousIndex);
});

// Next Button
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;

  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;

  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  slideToMove(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);

  updateChevron(slides, prevButton, nextButton, nextIndex);
});

// Dots navigation
dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return; // If targetDot is false or null -> return aka exit this function here.

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  slideToMove(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);

  updateChevron(slides, prevButton, nextButton, targetIndex);
});

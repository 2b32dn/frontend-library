const slideContainer = document.querySelector(".carousel__track");
const slides = Array.from(slideContainer.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");

// Get width of one slide regardless of browser's width
const slideWidth = slides[0].getBoundingClientRect().width;

// Set Slides according to its index on the X plane
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

// Slide Engine
const slideToMove = (currentSlide, targetSlide) => {
  slideContainer.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// Chevron Engine
const updateChevron = (targetIndex) => {
  prevButton.classList.toggle("is-hidden", targetIndex === 0);
  nextButton.classList.toggle("is-hidden", targetIndex === slides.length - 1);
};

// Previous Button
prevButton.addEventListener("click", () => {
  const currentSlide = slideContainer.querySelector(".current-slide");
  const previousSlide = currentSlide.previousElementSibling;
  const previousIndex = slides.findIndex((slide) => slide === previousSlide);

  if (previousSlide) {
    slideToMove(currentSlide, previousSlide);
    updateChevron(previousIndex);
  }
});

// Next Button
nextButton.addEventListener("click", () => {
  const currentSlide = slideContainer.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  if (nextSlide) {
    slideToMove(currentSlide, nextSlide);
    updateChevron(nextIndex);
  }
});

// Initialize chevron visibility
updateChevron(slides.findIndex(slide => slide.classList.contains("current-slide")));

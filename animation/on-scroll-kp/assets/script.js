const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerContainer = scroller.querySelector(".scroller__container");
    const scrollerContainerContent = Array.from(scrollerContainer.children);

    scrollerContainerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerContainer.appendChild(duplicatedItem);
    });
  });
}

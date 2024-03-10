const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    entry.isIntersecting
      ? entry.target.classList.add("show")
      : entry.target.classList.remove("show");
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    entry.isIntersecting
      ? entry.target.classList.add("show1")
      : entry.target.classList.remove("show1");
  });
});

const hiddenElements1 = document.querySelectorAll(".hidden1");
hiddenElements1.forEach((el) => observer1.observe(el));

document.querySelectorAll("[data-carousel]").forEach(carousel => {
  const slides = carousel.querySelector("[data-slides]");

  function getActiveIndex() {
    return [...slides.children].indexOf(slides.querySelector("[data-active]"));
  }

  function goTo(index) {
    const activeSlide = slides.querySelector("[data-active]");
    if (index < 0) index = slides.children.length - 1;
    if (index >= slides.children.length) index = 0;
    slides.children[index].dataset.active = true;
    activeSlide.removeAttribute("data-active");
  }

  setInterval(() => goTo(getActiveIndex() + 1), 4000);
});
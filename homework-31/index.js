"use strict";

const basicSlider = () => {
  const slider = document.querySelector(".js-slider");
  const sliderItems = slider.querySelectorAll(".slider__item");
  const prev = document.querySelector(".js-slider-prev");
  const next = document.querySelector(".js-slider-next");
  const IS_ACTIVE = "is-active";
  let currentSlideIndex = 0;

  const handleNavigationState = () => {
    prev.disabled = currentSlideIndex === 0;
    next.disabled = currentSlideIndex === sliderItems.length - 1;
  };

  const displayCurrentSliderItem = () => {
    sliderItems.forEach(item => item.classList.remove(IS_ACTIVE));
    sliderItems[currentSlideIndex].classList.add(IS_ACTIVE);
  };

  handleNavigationState();

  next.addEventListener("click", () => {
    currentSlideIndex++;
    displayCurrentSliderItem();
    handleNavigationState();
  });

  prev.addEventListener("click", () => {
    currentSlideIndex--;
    displayCurrentSliderItem();
    handleNavigationState();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  basicSlider();
});
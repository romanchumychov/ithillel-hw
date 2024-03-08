"use strict";

const basicSlider = () => {
  const slider = document.querySelector(".js-slider");
  const sliderItems = [...slider.querySelectorAll(".js-slider .slider__item")];
  const prev = document.querySelector(".js-slider-prev");
  const next = document.querySelector(".js-slider-next");
  const IS_ACTIVE = "is-active";
  let currentSlideIndex = 0;

  const handleNavigationState = () => {
    (currentSlideIndex === 0)
      ? prev.disabled = true
      : prev.disabled = false;

    (currentSlideIndex === sliderItems.length - 1)
      ? next.disabled = true
      : next.disabled = false;
  };

  const displayCurrentSliderItem = () => {
    const activeSliderItem = slider.querySelector(".slider__item.is-active");

    activeSliderItem.classList.remove(IS_ACTIVE);
    sliderItems[currentSlideIndex].classList.add(IS_ACTIVE);
  };

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
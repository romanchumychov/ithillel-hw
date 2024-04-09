"use strict";

const cardTemplate = data => `
  <div class="weather-card">
    <div class="weather-card__head">Місто: <strong>${data.name}</strong></div>
    <div class="weather-card__body">
      <div class="weather-card__picture">
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather icon">
        <span class="weather-card__temp">${Math.round(Number(data.main.temp))}°C</span>
      </div>
      <div class="weather-card__info">
        <div>Тиск: <span>${data.main.pressure}мм</span></div>
        <div>Вологість: <span>${data.main.humidity}%</span></div>
        <div>Швидкість вітру: <span>${data.wind.speed}м/с</span></div>
        <div>Напрям у градусах: <span>${data.wind.deg}</span></div>
      </div>
    </div>
  </div>
`;

const setResultOnPage = result => {
  const resultWrapper = document.getElementById("search-result");

  resultWrapper.innerHTML = result;
}

const errorHandler = response => {
  if (!response.ok) {

    if (response.status === 404) {
      setResultOnPage("City no found!");
      return false;
    }

    throw new Error("Response was not ok");
  }

  return response.json();
}

const request = e => {
  const inputValue = e.target.getElementsByClassName("form-control")[0].value;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

  fetch(URL)
    .then(errorHandler)
    .then(response => {
      setResultOnPage(cardTemplate(response));
    })
    .catch(error => {
      console.error("There was a problem with fetch request:", error);
    })
}

const weatherSearchInit = () => {
  const form = document.getElementById("weather-form");

  if (!form) return false;

  form.addEventListener("submit", e => {
    e.preventDefault();
    request(e);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  weatherSearchInit();
});
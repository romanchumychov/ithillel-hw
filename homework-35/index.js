"use strict";

const formDataToObject = formData => Object.fromEntries(formData.entries());

const dataTable = data => `
    <table>
        <tr>
            <td>Ім'я:</td>
            <td>${data["first-name"]}</td>
        </tr>
        <tr>
            <td>Прізвище:</td>
            <td>${data["last-name"]}</td>
        </tr>
        <tr>
            <td>Дата народження</td>
            <td>${data["birth-day"]}</td>
        </tr>
        <tr>
            <td>Стать</td>
            <td>${data["gender"]}</td>
        </tr>
        <tr>
            <td>Місто</td>
            <td>${data["city"]}</td>
        </tr>
        <tr>
            <td>Адреса</td>
            <td>${data["address"]}</td>
        </tr>
        ${data["language"].length
          ? `<tr>
              <td>Мови</td>
              <td>${data["language"].join(", ")}</td>
            </tr>` : ""}
    </table>
`;

const handleForm = () => {
  const form = document.getElementById("registration-form");
  const container = document.getElementsByClassName("container")[0];
  const getAllCheckedByName = name =>
    [...document.querySelectorAll(`[name=${name}]:checked`)].map(el => el.value);

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = formDataToObject(new FormData(this));

    formData["language"] = getAllCheckedByName("language");
    form.querySelector("[type=submit]").disabled = true;
    container.innerHTML = dataTable(formData);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  handleForm();
});
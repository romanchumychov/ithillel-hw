"use strict";

const handleForm = () => {
  const form = document.getElementById("search");
  const formTextField = form.querySelector("input[type=text]");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputValue = formTextField.value;
    const hasProtocol = inputValue.substring(0, 4) === "http";
    const href = hasProtocol ? inputValue : `https://${inputValue}`;

    alert(`Redirect to: ${href}`);
    window.location.href = href;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  handleForm();
});
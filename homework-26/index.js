"use strict";

const input = document.getElementsByClassName("text-field")[0];

function displayBlock(event) {
  let ghostBlock = document.createElement("span");
  ghostBlock.innerText = "Ghost block";

  if (event.type === "focus") {
    input.after(ghostBlock);
  } else if (event.type === "blur") {
    input.nextElementSibling.remove();
  }
}

input.addEventListener("focus", displayBlock);
input.addEventListener("blur", displayBlock);
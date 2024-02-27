"use strict";

const IMG_LENGTH = 9;
const randomIndex = Math.floor(Math.random() * IMG_LENGTH) + 1;
const img = document.createElement("img");

img.src = `./images/${randomIndex}.jpeg`;
img.alt = `img thumb ${randomIndex}`;

document.body.appendChild(img);
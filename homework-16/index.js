"use strict";

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const generateKey = (length, characters) => {
  let key = "";

  for (let i = 0; i < length; i++) {
    const randomCharacterIndex = Math.floor(Math.random() * characters.length);
    key = key + characters.charAt(randomCharacterIndex);
  }

  return key;
};

const key = generateKey(16, characters);
console.log(key);
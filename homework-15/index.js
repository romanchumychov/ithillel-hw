"use strict";

const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = (arr, item) => {
  if (!arr) console.log("No array data provided");
  if (!item) console.log("No 'item' argument provided");

  if (!arr || !item) return;

  const itemIndex = arr.indexOf(item);

  if (itemIndex === -1) {
    console.log(`Item "${item}" not found in array`);
    return;
  }

  arr.splice(itemIndex, 1);
};

removeElement(array, 5);

console.log(array);
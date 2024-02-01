"use strict";

const iterateSum = () => {
  let summary = 0;

  return function(param) {
    return summary = summary + param;
  };
}

const sum = iterateSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
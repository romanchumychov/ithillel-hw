"use strict";

const exponentiatesNumber = (num, degree) => {
  if (degree === 0) return 1;

  return exponentiatesNumber(num, degree - 1) * num;
};

console.log(exponentiatesNumber(2, 9));
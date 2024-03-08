"use strict";

const array =  [1, 2, [1, 2, 3, [1, 2, 3, 4, 5, 6, 7]], 4, 5, [1, 2]];

const generateList = array => `
  <ul>
      ${array.map(arrayItem => {
        return Array.isArray(arrayItem) 
          ? `<li>${generateList(arrayItem)}</li>` 
          : `<li>${arrayItem}</li>`
      }).join("")}
  </ul>
`;

const listWrapper = document.createElement("div");
document.body.appendChild(listWrapper);
listWrapper.innerHTML = generateList(array);
"use strict";

const table = document.createElement("table");
document.body.appendChild(table);

for (let i = 0; i < 10; i++) {
  let row = document.createElement("tr");

  for (let j = 1; j <= 10; j++) {
    const cell = `<td>${i * 10 + j}</td>`;
    row.innerHTML += cell;
    table.appendChild(row);
  }
}
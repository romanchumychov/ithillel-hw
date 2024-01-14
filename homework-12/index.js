"use strict";

// ARRAYS

/*
* Створити масив, довжину та елементи якого задає користувач.

    Відсортувати масив за зростанням.

    Видалити елементи з масиву з 2 по 4 (включно!).

    У міру змін виводити вміст масиву на сторінку.
* */

let userArrayLength = 0;

do {
  userArrayLength = Number(prompt("Введіть довжину масиву"));
} while (!userArrayLength)

const userArray = new Array(userArrayLength);

alert(`Масив має довжину у ${userArrayLength} елементів`);

for (let i = 0; i < userArrayLength; i++) {
  const arrayValue = prompt(`Додайте значення для ${i + 1} елемету массиву`);

  typeof arrayValue === "string" && isNaN(arrayValue)
    ? userArray[i] = arrayValue
    : userArray[i] = Number(arrayValue);

}

userArray.sort();

alert(`Відсортировавний массив: ${userArray}`);

userArray.splice(1, 3);

alert(`Реультат видаленя з 2 по 4 (включно!) елементів з масиву: ${userArray}`);
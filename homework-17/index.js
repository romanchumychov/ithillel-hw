"use strict";

/**
 * Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне
 * лише числових елементів даного масиву.
 */
const array = [1, "string1", false, 7, false, null, 31, NaN, "string2", 7];

const getArithmeticMeanFromArr = arr => {
  const number = arr.filter(element => typeof element === "number" && !isNaN(element));

  return number.reduce((acc, cur) => acc + cur) / number.length;
};

console.log(getArithmeticMeanFromArr(array));


/**
 * Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
 * У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії,
 * вказаної в змінній znak.Обидва числа і знак виходять від користувача.
 */
const doMath = (x, sign, y) => {
  switch (sign) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return (y !== 0)
        ? x / y
        : "На нуль не ділиться";
    case "%":
      return x % y;
    case "^":
      return x ** y;
    default:
      return "Невідомий оператор";
  }
};

console.log(doMath(8, "*", 2));


/**
 * Написати функцію заповнення даними користувача двомірного масиву.
 * Довжину основного масиву і внутрішніх масивів задає користувач.
 * Значення всіх елементів всіх масивів задає користувач.
 */
const add2DimensionArray = () => {
  const arrLength = Number(prompt("Введіть кількість масивів"));
  const arrElementLength = Number(prompt("Введіть кількість елементів кожного з масиву"));
  const array = [];

  for (let i = 0; i < arrLength; i++) {
    const array2d = [];

    for (let j = 0; j < arrElementLength; j++) {
      const value2d = prompt(`Введіть значення для ${i + 1} масиву і ${j + 1} елементу`);

      array2d.push(value2d);
    }

    array.push(array2d);
  }

  return array;
};

console.log(add2DimensionArray());


/**
 * Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
 * 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи
 * для видалення задає користувач.
 */
const removeCharsFromString = (string, chars) => {
  chars.forEach(char => {
    string = string.split(char).join("");
  });

  return string;
}

console.log(removeCharsFromString("hello world", ["l", "d"]));
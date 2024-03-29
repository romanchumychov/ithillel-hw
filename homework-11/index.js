/*
* Написати цикли, які роблять наступне:
* */

// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let arr1 = [];
for (let i = 20; i <= 30; i = i + 0.5 ) {
  arr1.push(i);
}
console.log(`1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5: ${arr1.slice("").join(" ")}`)


// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

console.log("2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.");
let dollarValue = 27;
for (let i = 10; i <= 100; i = i + 10) {
  console.log("  ", `Вартість ${i} доларів = ${i * dollarValue} гривень`);
}


// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let arr2 = [];
const N_1 = 121;
for (let i = 1; i <= 100; i++) {
  if (i**2 <= N_1) {
    arr2.push(i);
  }
}

console.log(`3. Всі цілі числа від 1 до 100, квадрат яких не перевищує числа "${N_1}": ${arr2.slice("").join(", ")}`);


// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const N_2 = 4;
let result = true;

console.log(`4. "${N_2}" ціле число. З'ясувати, чи є воно простим.`);

for (let i = 2; i <= Math.sqrt(N_2); i++) {
  if (N_2 % i === 0) {
    result = false;
    break;
  }

  result = true;
}

console.log(`Число "${N_2}" є ${result ? "Просте" : "НЕ Просте"}`);


// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

const N_3 = 13;
let result2 = true;
console.log(`5. Дане число "${N_3}". Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.`);

if (N_3 % 3 === 0) {
  const checker = N_3 / 3;

  if (checker === 1) {
    result2 = true;
  }
} else {
  result2 = false;
}

console.log(`${result2 ? "Можна" : "Не можна"}`);


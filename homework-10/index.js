// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
let arr1 = [];
for (let i = 10; i <= 20; i++) {
  arr1.push(i);
}
console.log(`1. Вивести на сторінку числа від 10 до 20: ${arr1.slice("").join(", ")}`);

// 2. Вивести квадрати чисел від 10 до 20.
let arr2 = [];
for (let i = 10; i <= 20; i++) {
  arr2.push(i * i);
}
console.log(`2. Вивести квадрати чисел від 10 до 20: ${arr2.slice("").join(", ")}`);

// 3. Вивести таблицю множення на 7.
console.log("3. Вивести таблицю множення на 7:");
for (let i = 1, j = 7; i <= 10; i++) {
  console.log("  ", `${j} * ${i} = ${j * i}`);
}

// 4. Знайти суму всіх цілих чисел від 1 до 15.
let sumOfWholeNumbers = 0;
for (let i = 1; i <= 15; i++) {
  sumOfWholeNumbers = sumOfWholeNumbers + i;
}
console.log(`4. Cумa всіх цілих чисел від 1 до 15: ${sumOfWholeNumbers}`);

// 5. Знайти добуток усіх цілих чисел від 15 до 35.
let productOfAllNumbers = 1;
for (let i = 15; i <= 35; i++) {
  productOfAllNumbers = productOfAllNumbers * i;
}
console.log(`5. Добуток усіх цілих чисел від 15 до 35: ${productOfAllNumbers}`);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let result = 0;
let length = 500;
for (let i = 1; i <= length; i++) {
  result = result + i;
}
let arithmeticMean = result / length;
console.log(`6. Середнє арифметичне всіх цілих чисел від 1 до 500: ${arithmeticMean}`);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sumEvenNumbers = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sumEvenNumbers = sumEvenNumbers + i;
  }
}
console.log(`7. Сума лише парних чисел в діапазоні від 30 до 80: ${sumEvenNumbers}`);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let arr3 = [];
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    arr3.push(i);
  }
}
console.log(`8. Вивести всі числа в діапазоні від 100 до 200 кратні 3: ${arr3.slice("").join(", ")}`);


// 9. Знайти та вивести на сторінку всі його дільники.
let n = 12;
let arr4 = [];
let quantity = 0;
let sumOfNaturalNumber = 0;

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    arr4.push(i);

    if (i % 2 === 0) {
      quantity = quantity + 1;
      sumOfNaturalNumber = sumOfNaturalNumber + i;
    }
  }
}
console.log(`9. Дано "${n}" число. Знайти та вивести на сторінку всі його дільники: ${arr4.slice("").join(", ")}`);

// 10. Визначити кількість його парних дільників.
console.log(`10. Визначити кількість його парних дільників: ${quantity}`);

// 11. Знайти суму його парних дільників.
console.log(`11. Знайти суму його парних дільників: ${sumOfNaturalNumber}`);

// 12. Надрукувати повну таблицю множення від 1 до 10.
console.log("12. Надрукувати повну таблицю множення від 1 до 10:");
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log("  ", `${i} * ${j} = ${i * j}`);
  }
  console.log("  ", "-------------");
}
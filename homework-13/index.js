"use strict";

const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1. Знайти суму та кількість позитивних елементів.

const positiveElements = array.filter(el => el > -1);
const sumPositive = positiveElements.reduce((acc, cur) => acc + cur);
console.log(`Масив позитиних елементів: ${positiveElements}`);
console.log(`Сумма позитивних елементів: ${sumPositive}`);


// 2. Знайти мінімальний елемент масиву та його порядковий номер.

const minValue = array.reduce((acc, cur) => acc < cur ? acc : cur );
const indexMinValue = array.indexOf(minValue);

console.log(`Мінімальний елемент в масиві: ${minValue}`);
console.log(`Індекс в масиві мінімального елементу: ${indexMinValue}`);


// 3. Знайти максимальний елемент масиву та його порядковий номер.

const maxValue = array.reduce((acc, cur) => acc > cur ? acc : cur );
const indexMaxValue = array.indexOf(maxValue);

console.log(`Максимальний елемент в масиві: ${maxValue}`);
console.log(`Індекс в масиві максимального елементу: ${indexMaxValue}`);


// 4. Визначити кількість негативних елементів.

const negativeElements = array.filter(el => el < 0);
console.log(`В масиві ${negativeElements.length} негативних елементів`);


// 5. Знайти кількість непарних позитивних елементів.

const positiveOdd = positiveElements.filter(el => el % 2 !== 0);
console.log(`Кількість непарних позитивних елементів ${positiveOdd.length}`);


// 6. Знайти кількість парних позитивних елементів.

const positiveEven = positiveElements.filter(el => el % 2 === 0);
console.log(`Кількість парних позитивних елементів ${positiveEven.length}`);


// 7. Знайти суму парних позитивних елементів.

const sumPositiveEven = positiveEven.reduce((acc, cur) => acc + cur);
console.log(`Сума парних позитивних елементів: ${sumPositiveEven}`);


// 8. Знайти суму непарних позитивних елементів.
//
const sumPositiveOdd = positiveOdd.reduce((acc, cur) => acc + cur);
console.log(`Сума непарних позитивних елементів: ${sumPositiveOdd}`);


// 9. Знайти добуток позитивних елементів.

const productOfPositive = positiveElements.reduce((acc, cur) => acc * cur);
console.log(`Добуток позитивних елементів: ${productOfPositive}`);


// 10. Знайти найбільший серед елементів масиву, остальні обнулити.

const array2 = array.map(el => maxValue === el ? el : 0);
console.log(array2);
const firstNum = Number(prompt("Please enter first number"));
const secondNum = Number(prompt("Please enter second number"));

const addition = firstNum + secondNum;
const subtraction = firstNum - secondNum;
const multiplication = firstNum * secondNum;
const division = firstNum / secondNum;
const result = `
    Addition result: ${addition}
    Subtraction result: ${subtraction}
    Multiplication result: ${multiplication}
    Division result: ${division}
`;

alert(result);
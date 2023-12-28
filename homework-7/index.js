const operation = prompt("Which operation will you choose (add, sub, mult, div)) ?");

if (operation) {
  const firstNum = Number(prompt("Enter first number"));
  const secondNum = Number(prompt("Enter second number"));

  switch (operation) {
    case "add":
      alert(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`)
      break;

    case "sub":
      alert(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`)
      break;

    case "mult":
      alert(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`)
      break;

    case "div":
      alert(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`)
      break;

    default:
      alert("No data provide");
  }
} else {
  alert("Does not correspond to the options provided");
}


class SuperMath {

  operations = ["+", "-", "/", "*", "%"];

  #doMath(x, sign, y) {
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
    }
  };

  input() {
    const X = Number(prompt("Введіть число X:"));
    const Y = Number(prompt("Введіть число Y:"));
    const znak = prompt(`Виберіть математичну операцію '${this.operations.join(" ")}':`);

    this.check({ X, Y, znak });
  }

  check(obj) {
    const { X, Y, znak } = obj;

    if (!this.operations.includes(znak)) {
      alert(`Введений знак операції не відповідає списку ${this.operations.join(" ")}`);
      return;
    }

    const userAnswer = confirm(`Ви хочете зробити таку математичну операцію: ${X} ${znak} ${Y} ?`);

    if (userAnswer) alert(`Результат операції: ${this.#doMath(X, znak, Y)}`);
    else this.input();
  }
}

const obj = { X: 12, Y: 3, znak: "/" };

const p = new SuperMath();

p.check(obj);
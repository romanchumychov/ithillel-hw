class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
  }

  toppings = [];

  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_LARGE = { price: 100, calories: 40 };
  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };
  static TOPPING_MAYO = { price: 20, calories: 5 };
  static TOPPING_SAUCE = { price: 15, calories: 0 };

  addTopping(topping) {
    this.toppings.push(topping);
  }

  #calculate(prop) {
    const items = [this.size, this.stuffing, ...this.toppings];
    return items.reduce((acc, cur) => acc + cur[prop], 0);
  }

  calculateCalories() {
    return this.#calculate("calories");
  }

  calculatePrice() {
    return this.#calculate("price");
  }
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log(`Calories: ${hamburger.calculateCalories()}`);

// скільки коштує
console.log(`Price: ${hamburger.calculatePrice()}`);

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log(`Price with sauce: ${hamburger.calculatePrice()}`);
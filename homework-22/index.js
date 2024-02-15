class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`Імя людини: ${this.name}, Вік: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, licenseNumber) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licenseNumber = licenseNumber;
    this.owner = null;
  }

  setOwner(human) {
    if (human.age > 18) {
      this.owner = human;
    } else {
      console.log("Ваш вік має бути більше ніж 18 років");
    }
  }

  info() {
    console.log(
      `Марка: ${this.brand},`,
      `Модель: ${this.model},`,
      `Рік: ${this.year},`,
      `Номерний знак: ${this.licenseNumber}`,
    );

    if (this.owner) {
      this.owner.info();
    } else {
      console.log(`Авто ${this.brand} не має власника`);
    }
  }
}

const peterGriffin = new Human("Peter Griffin", 40);
const loisGriffin = new Human("Lois Griffin", 17);

const explorer = new Car("Ford", "Explorer", 2018, "CF848M");
const gCherokee = new Car("JEEP", "Grand Cherokee", 2021, "LA090T");

explorer.setOwner(peterGriffin);
gCherokee.setOwner(loisGriffin);

explorer.info();
gCherokee.info();
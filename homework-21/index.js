class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }

  addResident(person) {
    this.residents.push(person);
  }
}

class House {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
     if (this.apartments.length < this.maxApartments) {
       this.apartments.push(apartment);
     } else {
       console.log("Більше нема вільних квартир.");
     }
  }
}

const peterGriffin = new Human("Peter Griffin", "Male");
const loisGriffin = new Human("Lois Griffin", "Female");

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(peterGriffin);
apartment2.addResident(loisGriffin);

const house = new House(8);

house.addApartment(apartment1);
house.addApartment(apartment2);
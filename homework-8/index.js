// Task 1
const userBirthYear = prompt("Вкажи свій рік народження будь ласка");
if (!userBirthYear) alert("Шкода, що Ви не захотіли ввести свію дату нарождення!")

const userCity = prompt("У якому місті ти живеш?");
if (!userCity) alert("Шкода, що Ви не захотіли ввести своє місто!")

let userCityMessage = "";

switch(userCity) {
  case "Київ":
    userCityMessage = "Ти живеш у столиці України";
    break;

  case "Вашингтон":
    userCityMessage = "Ти живеш у столиці USA";
    break;

  case "Лондон":
    userCityMessage = "Ти живеш у столиці Англії";
    break;

  default:
    userCityMessage = `Ти живеш у місті ${userCity}`;
}

// Task 2
const userSport = prompt("Який улюблений вид спорту?");
if (!userSport) alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту!")

let userSportMessage = "";

switch (userSport) {
  case "Бокс":
    userSportMessage = "Круто! Хочеш стати як Кличко?";
    break;

  case "Футбол":
    userSportMessage = "Круто! Хочеш стати як Кріштіану Роналду?";
    break;

  case "Хокей":
    userSportMessage = "Круто! Хочеш стати як Мітч Марнер?";
    break;
}

const message = `
  ${userBirthYear}
  ${userCityMessage}
  ${userSportMessage}
`;

alert(message);
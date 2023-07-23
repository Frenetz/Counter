const daysNumber = document.querySelector(".days-number");
const daysWord = document.querySelector(".days-word");

const hoursNumber = document.querySelector(".hours-number");
const hoursWord = document.querySelector(".hours-word");

const minutesNumber = document.querySelector(".minutes-number");
const minutesWord = document.querySelector(".minutes-word");

const secondsNumber = document.querySelector(".seconds-number");
const secondsWord = document.querySelector(".seconds-word");

document.addEventListener("DOMContentLoaded", function () {
  secondsWordChanging();
  minutesWordChanging();
  hoursWordChanging();
  daysWordChanging();
  CountDown();
});

let interval;

function CountDown() {
  interval = setInterval(function () {
    secondsChanging();
  }, 1000);
}

// console.log(
//   secondsNumber.textContent[secondsNumber.textContent.length - 1],
//   secondsNumber.textContent[1]
// );

function secondsChanging() {
  if (
    secondsNumber.textContent == 0 &&
    minutesNumber.textContent == 0 &&
    hoursNumber.textContent == 0 &&
    daysNumber.textContent == 0
  ) {
    clearInterval(interval);
  } else if (secondsNumber.textContent == 0 && minutesNumber.textContent != 0) {
    minutesNumber.textContent = minutesNumber.textContent - 1;
    secondsNumber.textContent = 59;
  } else if (
    secondsNumber.textContent == 0 &&
    minutesNumber.textContent == 0 &&
    hoursNumber.textContent != 0
  ) {
    hoursNumber.textContent = hoursNumber.textContent - 1;
    minutesNumber.textContent = 59;
    secondsNumber.textContent = 59;
  } else if (
    secondsNumber.textContent == 0 &&
    minutesNumber.textContent == 0 &&
    hoursNumber.textContent == 0 &&
    daysNumber.textContent != 0
  ) {
    daysNumber.textContent = daysNumber.textContent - 1;
    hoursNumber.textContent = 23;
    minutesNumber.textContent = 59;
    secondsNumber.textContent = 59;
  } else {
    secondsNumber.textContent = secondsNumber.textContent - 1;
  }
  secondsWordChanging();
  minutesWordChanging();
  hoursWordChanging();
  daysWordChanging();
}

function secondsWordChanging() {
  if (
    secondsNumber.textContent[secondsNumber.textContent.length - 1] == 1 &&
    secondsNumber.textContent != 11
  ) {
    secondsWord.textContent = "Секунда";
  } else if (
    (secondsNumber.textContent[secondsNumber.textContent.length - 1] == 2 &&
      secondsNumber.textContent != 12) ||
    (secondsNumber.textContent[secondsNumber.textContent.length - 1] == 3 &&
      secondsNumber.textContent != 13) ||
    (secondsNumber.textContent[secondsNumber.textContent.length - 1] == 4 &&
      secondsNumber.textContent != 14)
  ) {
    secondsWord.textContent = "Секунды";
  } else {
    secondsWord.textContent = "Секунд";
  }
}

function minutesWordChanging() {
  if (
    minutesNumber.textContent[minutesNumber.textContent.length - 1] == 1 &&
    minutesNumber.textContent != 11
  ) {
    minutesWord.textContent = "Минута";
  } else if (
    (minutesNumber.textContent[minutesNumber.textContent.length - 1] == 2 &&
      minutesNumber.textContent != 12) ||
    (minutesNumber.textContent[minutesNumber.textContent.length - 1] == 3 &&
      minutesNumber.textContent != 13) ||
    (minutesNumber.textContent[minutesNumber.textContent.length - 1] == 4 &&
      minutesNumber.textContent != 14)
  ) {
    minutesWord.textContent == "Минуты";
  } else {
    minutesWord.textContent = "Минут";
  }
}

function hoursWordChanging() {
  if (
    hoursNumber.textContent[hoursNumber.textContent.length - 1] == 1 &&
    hoursNumber.textContent != 11
  ) {
    hoursWord.textContent = "Час";
  } else if (
    (hoursNumber.textContent[hoursNumber.textContent.length - 1] == 2 &&
      hoursNumber.textContent != 12) ||
    (hoursNumber.textContent[hoursNumber.textContent.length - 1] == 3 &&
      hoursNumber.textContent != 13) ||
    (hoursNumber.textContent[hoursNumber.textContent.length - 1] == 4 &&
      hoursNumber.textContent != 14)
  ) {
    hoursWord.textContent = "Часа";
  } else {
    hoursWord.textContent = "Часов";
  }
}

function daysWordChanging() {
  if (
    daysNumber.textContent[daysNumber.textContent.length - 1] == 1 &&
    daysNumber.textContent != 11
  ) {
    daysWord.textContent = "День";
  } else if (
    (daysNumber.textContent[daysNumber.textContent.length - 1] == 2 &&
      daysNumber.textContent != 12) ||
    (daysNumber.textContent[daysNumber.textContent.length - 1] == 3 &&
      daysNumber.textContent != 13) ||
    (daysNumber.textContent[daysNumber.textContent.length - 1] == 4 &&
      daysNumber.textContent != 14)
  ) {
    daysWord.textContent = "Дня";
  } else {
    daysWord.textContent = "Дней";
  }
}

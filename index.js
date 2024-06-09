const a = 14;
const b = 1;
if (a && b) {
  console.log("Обидва поля заповненi");
} else {
  console.log("Не всі поля заповнені");
}

const checkedNumber1 = prompt("Введіть перше число");
const checkedNumber2 = prompt("Введіть друге число");
const number1 = Number(checkedNumber1);
const number2 = Number(checkedNumber2);
if (number1 + number2 <= 10) {
  console.log("Сума менша або дорівнює 10");
} else {
  console.log("Сума більша за 10");
}

const qestion = prompt("Введіть текст");
const qestionLower = qestion.toLowerCase();
const qestionSearch = qestionLower.includes("javascript");
if (qestionSearch === true) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

const testQestion = prompt("Введіть число");
const testNumber = Number(testQestion);
if (testNumber >= 10 && testNumber <= 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

const userName = prompt("Введіть своє ім'я");
const email = prompt("Введіть свій email");
const password = prompt("Введіть свій пароль");
const userNameAudit = userName.length;
const emailAudit = email.includes("@" && ".");
const passwordAudit = password.length;
if (userNameAudit > 3 && emailAudit && passwordAudit > 6) {
  alert("OK)");
} else {
  alert("No(");
}

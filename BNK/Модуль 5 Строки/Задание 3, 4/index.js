const userName = prompt("Как Вас зовут?");
const userAge = prompt("Сколько вам лет?");

let userName1 = userName.trim();
let userName2 = userName1.toUpperCase();

let userAge1 = userAge.trim();
let userAge2 = Number(userAge1);

alert(`Вас зовут ${userName2}, и вам ${userAge2} лет`);

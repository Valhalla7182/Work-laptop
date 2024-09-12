const userString = prompt("Введите текст для обрезки:");
const startSliceIndex = prompt("Введите индекс, с которого надо начать обрезку");
const endliceIndex = prompt("Введите индекс, которым нужно закончить обрезку строки:");

let correctUserString = userString.trim();

let index1 = Number(correctUserString.indexOf(startSliceIndex));
let index2 = Number(correctUserString.indexOf(endliceIndex)) + 1;

let subSTR = correctUserString.substring(index1, index2);

let res = correctUserString.replace(subSTR, ' ');
alert(`Результат: ${res}`);
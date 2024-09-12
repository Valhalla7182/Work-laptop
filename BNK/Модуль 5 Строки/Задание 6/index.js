const userString = prompt("Введите текст для обрезки:");
const wordFromText = prompt("Введите слово из текста:");

let correctUserString = userString.trim();
let correctWordFromText = wordFromText.trim();

// let index1 = Number(correctUserString.indexOf(startSliceIndex));
// let index2 = Number(correctUserString.indexOf(endliceIndex)) + 1;

let res = correctUserString.replace(correctWordFromText, '');
alert(`Результат: ${res}`);
let answer1 = 4;
let answer2 = 4;
let answer3 = 1;
let answer4 = 12;
let answer5 = 6;


let correctAnswers = 0;
let incorrectAnswers = 0;


let question1 = Number(prompt("Сколько будет 2 + 2?"));
if (answer1 === question1) {
    alert("Ответ верный!");
    correctAnswers++;
} else if(answer1 !== question1) {
    alert("Ответ неверный");
    incorrectAnswers++;
}

let question2 = Number(prompt("Сколько будет 2 * 2?"));
if (answer2 === question2) {
    alert("Ответ верный!");
    correctAnswers++;
} else if(answer2 !== question2) {
    alert("Ответ неверный");
    incorrectAnswers++;
}

let question3 = Number(prompt("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"));
if (answer3 === question3) {
    alert("Ответ верный!");
    correctAnswers++;
} else if(answer3 !== question3) {
    alert("Ответ неверный");
    incorrectAnswers++;
}

let question4 = Number(prompt("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"));
if (answer4 === question4) {
    alert("Ответ верный!");
    correctAnswers++;
} else if(answer4 !== question4) {
    alert("Ответ неверный");
    incorrectAnswers++;
}

let question5 = Number(prompt("Сколько будет 2 + 2 * 2?"));
if (answer5 === question5) {
    alert("Ответ верный!");
    correctAnswers++;
} else if(answer5 !== question5) {
    alert("Ответ неверный");
    incorrectAnswers++;
}




alert(`Конец теста! Правильные ответы ${correctAnswers}, неправильные ответы ${incorrectAnswers}.`);
function checkQuestionAnswer(question, correctAnswer) {
    let answer = prompt(question);
    if (answer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
        alert("Ответ верный");
    }else{
        alert("Ответ неверный");
    }
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');
let clientsEstimations = [];

function askClientToGiveEstimation() {
    let estimation = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'));
    if (estimation <= 10) {
        clientsEstimations.push(estimation);
    }
}

for(let i = 1; i <= 5; i++) {
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter((number) => {
    return number > 5;
});
const badEstimations = clientsEstimations.filter((number) => {
    return number <= 5;
});

alert(`Всего положительных оценок: ${goodEstimations.length} .Всего отрицательных оценок ${badEstimations.length}.`)
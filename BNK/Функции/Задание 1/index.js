const userName1 = prompt("Введите ваше имя: ");
const userName2 = prompt("Введите ваше имя: ");
const userName3 = prompt("Введите ваше имя: ");

function getName1(name) {
    console.log(`Имя равно ${name}`);
}

const getName2 = function(name) {
    console.log(`Имя равно ${name}`);   
}

const getName3 = (name) => {
    console.log(`Имя равно ${name}`);
}

getName1(userName1);
getName2(userName2);
getName3(userName3);


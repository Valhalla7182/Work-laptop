function getMathResult(expression) {
    if (expression.length < 3) {
        return "Ошибка";
    }

    let filteredExpression = expression.filter((item) => {
        return !isNaN(item) || ["+", "-", "*", "/", ">", "<", "="].includes(item);
    });

    if (filteredExpression.length !== 3) {
        return "Ошибка";
    }

    let [a, operator, b] = filteredExpression;

    if (!["+", "-", "*", "/", ">", "<", "="].includes(operator)) {
        return "Ошибка";
    }

    a = Number(a);
    b = Number(b);

    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        case ">":
            return a > b;
        case "<":
            return a < b;
        case "=":
            return a === b;
        default:
            return "Ошибка";
    }
}

console.log(getMathResult(['200', '+', 300])); // 500
console.log(getMathResult(['20', '-', '5'])); // 15
console.log(getMathResult([100, '/', 100])); // 1
console.log(getMathResult([2, '-', 2])); // 0
console.log(getMathResult(['5', '>', '10'])); // false
console.log(getMathResult(['5', '<', '10'])); // true
console.log(getMathResult(['1', '=', 1])); // true
console.log(getMathResult(['1', '**', 1])); // 'Ошибка'
console.log(getMathResult(['+', '100', 10])); // 'Ошибка'
console.log(getMathResult(['100', 10])); // 'Ошибка'
console.log(getMathResult(['100', 'hello', 'javascript', 'help200', '+', 4])); // 104
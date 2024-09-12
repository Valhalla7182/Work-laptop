function getMathResult(...expression) {
    const [expressionCopy] = [...expression]
    // const sum = expressionCopy[0] + expressionCopy[2]
    
    
    expressionCopy.forEach((numbers, index) => {
        switch(expressionCopy[1]) {
            case '+':
                console.log(Number(expressionCopy[0]) + Number(expressionCopy[expressionCopy.length - 1]))
                break;
            case '-':
                console.log(Number(expressionCopy[0]) - Number(expressionCopy[expressionCopy.length - 1]))
                break;
            case '/':
                console.log(Number(expressionCopy[0]) / Number(expressionCopy[expressionCopy.length - 1]))
                break;
            case '*':
                console.log(Number(expressionCopy[0]) * Number(expressionCopy[expressionCopy.length - 1]))
                break;
            case '<':
                console.log(Number(expressionCopy[0]) < Number(expressionCopy[expressionCopy.length - 1]))
                break;      
            case '>':
                console.log(Number(expressionCopy[0]) > Number(expressionCopy[expressionCopy.length - 1]))
                break;
            case '=':
                console.log(Number(expressionCopy[0]) === Number(expressionCopy[expressionCopy.length - 1]))
                break;
            default:
                console.log("Ошибка");
                if(expressionCopy.length < 3) {
                    console.log("Ошибка");
                }
        }   
        
    });
}
getMathResult(['200', '+', 300]); // 500
getMathResult(['20', '-', '5']); // 15
getMathResult([100, '/', 100]); // 1
getMathResult([2, '-', 2]); // 0
getMathResult(['5', '>', '10']); // false
getMathResult(['5', '<', '10']); // true
getMathResult(['1', '=', 1]); // true
getMathResult(['1', '**', 1]); // 'Ошибка'
getMathResult(['+', '100', 10]); // 'Ошибка'
getMathResult(['100', 10]); // 'Ошибка'
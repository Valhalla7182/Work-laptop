function getSumOfNumbers (number, type = "odd") {
    let res = 0;
    if (number === Number(number)) {
    for (let i = 0; i <= number; i++) {
        if(type == "even") {
            if(i % 2 === 0) {
                res += i;
            }
        }else if(type == "odd") {
            if(i % 2 !== 0) {
                res += i;
            }
        }else{
            res += i;
        }
    }
    return res;
    }else {
        return NaN;
    }
}

console.log(getSumOfNumbers("dawdwa"));
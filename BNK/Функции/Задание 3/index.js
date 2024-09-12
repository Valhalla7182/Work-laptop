function getDividorsCount(number) {
    let count = 0;
    if(Number(number)) {
    for (let i = 1; i <= number; i++) {
        if(number % i === 0) {
            count++;
        }
    }
    return count;
    }else {
        return NaN;
    }
}

console.log(getDividorsCount(5));
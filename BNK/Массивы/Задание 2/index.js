function getSumOfSequence(number) {
    let array = [];
    let res = 0;
    for(let i = 0; i < number; i++) {
        array[i] = i + 1;
    }

    res = array[0] + array[number - 1];
    // array.forEach((num, index, array) => {
    //     array[index] = num + 1;
    //     res = array[0] + array[number - 1];
    // })
    return res;
}
console.log(getSumOfSequence(5));


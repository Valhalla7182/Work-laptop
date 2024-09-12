const numbers = [10, 4, 100, -5, 54, 2];

function cubeByFor() {
    let res = 0;
    for(let i = 0; i < numbers.length; i++) {
        res += numbers[i] ** 3;
    }
    console.log(res);
}

function cubeByForOf() {
    let res = 0
    for (nums of numbers) {
        res += nums ** 3;
    }
    console.log(res);
}
    
    let sum = 0
    let cubeByForEach = Number(numbers.forEach((nums) => {
        sum += nums ** 3;
    }));
    console.log(sum);


    let res = numbers.reduce((acc, num) => {
        return acc + Math.pow(num, 3);
    })
    console.log(res);

    cubeByFor();
    cubeByForOf();

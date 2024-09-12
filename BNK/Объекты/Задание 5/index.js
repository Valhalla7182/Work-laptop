function sum(...numbers) {
    // Твоя реализация
    let [...nums] = numbers;

    return nums.reduce((acc, num) => {
        return acc + num;
    })
    
}
  
  console.log(sum(1, 2, 3)) // 6
  console.log(sum(2, 2)) // 4
  console.log(sum(10, 15, 249, 653, 846)) // 1773
  console.log(sum(1,2,3,4,5,6,7,8,9,10,11,2,5,553545,4342,5656)) // 1773
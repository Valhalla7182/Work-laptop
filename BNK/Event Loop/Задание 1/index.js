//в комментах 1-ая цифра это как я думал, а потом как оказалось

setTimeout(() => {
    console.log('setTimeout'); //3 - 4
  }, 0);
  
const promise = new Promise((resolve) => {
    console.log('Promise'); //2 - 1
    resolve();
  });
  
  promise.then(() => {
    console.log('Promise resolve'); //4 - 3
  });
  
  console.log('End'); //1 - 2
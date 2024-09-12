//в комментах 1-ая цифра это как я думал, а потом как оказалось

function runCode() {
  console.log('before promise'); // 1 - 1
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Zero Promise'); // 4 - 4
      resolve();
    }, 0);
  });
}
setTimeout(() => {
  console.log('Zero'); //5 - 3
}, 0);
runCode().then(() => console.log('Zero Promise Invoked')); //3 - 5
console.log('One');//2 - 2
//в комментах 1-ая цифра это как я думал, а потом как оказалось

const getData = (callback) => {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .then((user) => {
      console.log('Success'); // 4 - 2
      callback(user);
    })
    .catch((error) => {
      console.log(error);
    });
}
getData(() => {
  console.log('user received'); //1 - 3
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('promise resolved'); //6 - 6
    }, 500);
    console.log('in promise'); // 2 - 4
    setTimeout(() => {
      console.log('last set timeout');
    }, 400); // 5 - 5 
 });
 promise.then((result) => {
   console.log(result); // 6 - 6
  });
});
console.log('End') //3 - 1
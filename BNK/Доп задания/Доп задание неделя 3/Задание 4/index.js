function getWinner(applicants, winnerObject) {
  const winnerKey = getRandomNumberInRange(1,3);

  for (const keys in applicants) {
    if (Number(keys) === winnerKey) {
      return `prize: ${winnerObject.prize}, ${applicants}`
    }
  }
}

const todaysWinner = {
  prize: '10 000$',
}

const winnerApplicants = {
  '1': {
     name: 'Максим',
     age: 25,
  },
  '2': {
     name: 'Светлана',
     age: 20,
  },
  '3': {
     name: 'Екатерина',
     age: 35,
  },
}

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner); 
// { prize: '10 000$', name: 'Максим', age: 25 }
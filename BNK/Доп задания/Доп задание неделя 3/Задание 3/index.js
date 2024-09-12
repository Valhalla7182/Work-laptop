function getKiller(suspectInfo, deadPeople) {
  for (const suspects in suspectInfo) {
       
    suspectInfo[suspects].forEach(names => {
              
          })
  }

}

console.log(
  getKiller(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"]
    },
    ["Lucas", "Bill"]
  )
); // Убийца James

console.log(
  getKiller(
    {
      Brad: [],
      Megan: ["Ben", "Kevin"],
      Finn: []
    },
    ["Ben"]
  )
); // Убийца Megan
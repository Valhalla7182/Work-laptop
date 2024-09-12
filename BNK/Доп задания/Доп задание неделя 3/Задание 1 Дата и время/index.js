const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2040',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2041',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2039',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2010',
    },
  ];
  
  function allowVisa(people) {
    // Your code...
    const dateNow = new Date().getTime();
    const filteredPeople = people.filter((item, index) => {
        return Date.parse(item.passportExpiration) > dateNow && item.criminalRecord == false;
  })
  return filteredPeople
}
   
  const result = allowVisa(peopleWithVisa);
  console.log('result', result);

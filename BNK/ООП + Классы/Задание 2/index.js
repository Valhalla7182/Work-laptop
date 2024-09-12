// class Student {
//     constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';
// }
//     setTechnologies = function(technologies) {
//       this.technologies = [
//         ...this.technologies,
//         ...technologies,
//       ];
// 	}
//     setNewStatus = function(newStatus) {
//       this.status = newStatus;
//     }
// }

// const student = new Student ('Maxim', 20);
// student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
// student.setNewStatus('Middle');
// console.log(student);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  compareAge(personAge) {
    if(personAge.age >= this.age) {
      console.log(`${this.name} младше, чем ${personAge.name}`)
    }else{
      console.log(`${this.name} старше, чем ${personAge.name}`)
    }
    return this;
  }
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);

person1.compareAge(person2); // Максим младше, чем Светлана 
person2.compareAge(person3); // Светлана старше, чем Ирина 
person3.compareAge(person1); // Ирина младше, чем Максим
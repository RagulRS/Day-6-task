
class Person {
    constructor(name, age, gender, number) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.phNo = number;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Phone Number: ${this.phNo}`;
    }
  }

  const person = new Person('Ragul', 23, 'Male', '8667897863');
  console.log(person.getDetails());
  
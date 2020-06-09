// class Person {
//   constructor(name = "Anonymous") {
//     this.name = name;
//   }
//   getGretting() {
//     return "Hi this is! " + this.name;
//   }
// }
// const me = new Person("Sabah Ashraf");
// console.log(me.getGretting());
// const other = new Person();
// console.log(other.getGretting());

//CHALLANGE
// class Person {
//   constructor(name = "Anonymous", age = 0) {
//     this.name = name;
//     this.age = age;
//   }
//   getDescription() {
//     return this.name + " is " + this.age + " year(s) old";
//   }
// }
// class Student extends Person {
//   constructor(name, age, major) {
//     super(name, age);
//     this.major = major;
//   }
//   hasMajor() {
//     return !!this.major;
//   }
//   getDescription() {
//     let description = super.getDescription();
//     if (this.hasMajor()) {
//       description += " .Their major is " + this.major;
//     }
//     return description;
//   }
// }
// const me = new Student("Sabah Ashraf", 22, "Computer Science and Engineering");

// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getDescription());

//Challange
class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  getGretting() {
    return "Hi this is " + this.name;
  }
}

class Traveller extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }
  homeLocation() {
    return !!this.location;
  }
  getGretting() {
    let description = super.getGretting();
    if (this.homeLocation()) {
      description += " .I am visiting from " + this.location;
    }
    return description;
  }
}
const me = new Traveller("Sabah Ashraf", 22, "Dhaka");
console.log(me.getGretting());

const other = new Traveller(undefined, undefined, "nowhere");
console.log(other.getGretting());

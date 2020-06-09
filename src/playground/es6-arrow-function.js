// const squareArrow = (x) => {
//   return x * x;
// };
// console.log(squareArrow(4));

// const squareArrow = (x) => x * x;
// console.log(squareArrow(8));

//Challange#
// const getFirstName = (fullName) => {
//   return fullName.split(" ")[0];
// };
// console.log(getFirstName("Mike smith"));

// const getFirstName = (fullName) => fullName.split(" ")[0];
// console.log(getFirstName("Sabah Ashraf"));

//Part 2

// const user = {
//   name: "Sabah",
//   cities: ["Dhaka", "Delhi", "Jaipur"],
//   printPlacesLived() {
//     // const that = this;
//     return this.cities.map((city) => this.name + " has lived in " + city);
//   },
// };
// //     return cityMessages;

// //     // this.cities.forEach((city) => {
// //     //   console.log(this.name + " Has lived in " + city);
// //     // });
// //   },
// // };
// console.log(user.printPlacesLived());

//CHALLANGE
const multipliers = {
  numbers: [1, 2, 3],
  multiply: 3,

  printMultipliedNumbers() {
    return this.numbers.map((num) => num * this.multiply);
  },
};

console.log(multipliers.printMultipliedNumbers());

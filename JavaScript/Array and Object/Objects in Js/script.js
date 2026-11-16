//Creating Object

let x;

const person = {
  name: "Venkatesh",
  age: 24,
  isMarried: false,
  address: {
    street: "Dadagapatty",
    city: "Salem",
    state: "TN",
  },
  skill: ["Java", "c", "cpp", "html", "css", "js"],
};

//Accessing the object properties
// x = person.address.city;

// x = person.skill[0];

//Updateing properties

x = person.name = "Venkateshwaran";

// x=person.name;

//Deleting the properties

//use delete key

// delete person.isMarried;

// Function

//if the function is part of the Object is called it as method . if we invoke we need referance to call

// if the function is not a part of the object is called it as Function . we don't need the referance to call

//syntax for function is used funcion keyword

// person.leetMeGreet = function leetMeGreet() {
//   console.log(`Hello , I'm ${this.name} from Salem`);
// };
// person.leetMeGreet();//one of the way

// function leetMeGreet(){
//     console.log(`Hello , I'm ${this.name} from Salem`);
// }
// console.log(leetMeGreet());//another way to call

person.leetMeGreed = function () {
  console.log(`Hello , I'm ${this.name} from Salem`);
};
person.leetMeGreed();
// console.log(person.leetMeGreed());
// console.log(person);

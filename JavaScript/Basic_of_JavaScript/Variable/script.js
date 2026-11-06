//way to use declare a variable
// let , var , const
let firstName = "Venkatesh";
const lastName = "L";
console.log(firstName, lastName);

let age = 24; //declare a varibale and also assigned a value
console.log(age);
//naming conventsion
//only $ , _ are allowed
//firstName--> camelcase -- variable
//FristName--> pascalcase
age = 27;
console.log(age);

let score; //declare a variable is done only using the let keyword not done by const keyword
// console.log(score);
score = 101;
console.log(score);
const num = 45;
num = 50;
//const num1;//'const' declarations must be initialized.
console.log(num); //Uncaught TypeError: Assignment to constant variable.

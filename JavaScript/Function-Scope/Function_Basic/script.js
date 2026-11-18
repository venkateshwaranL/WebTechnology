//Define or decalred a function
function say() {
  console.log("Hello JavaScript");
}
//calling or executing or invoke
say();

//type 2
//defining  a function with parameters
function add(num1, num2) {
  console.log(num1 + num2);
}
//invoke
add(5); //num1 is 5 , but num2 is nothing so empty , 5+NaN is NaN .
add(5, 10); //15
add(5, 10, 15); //here no error , 3rd one is not taking  but we over come with this in upcoming class output: 15.

//type 3

function sub(num1, num2) {
  return num1 - num2;
  return (num1 - num2, num1 + num2); //In js its possible , but how to retrive the two date we see in upcoming calss.
  //return num1 - num2 , return num1 + num2; its show error .
  console.log("After the return"); //if jump statement is present after the jump statement run in the code is go to closing block of code ,  means it will come out of the bloack .
}

let result1 = sub(10, 2);
let result2 = sub(10, 2);

console.log(result1, result2);
const res = sub(10, 2);
console.log(res + 10);

//type 4 defalut parameter
function registerUser(user = "String Stack") {
  return user + " is Register";
} //'stringstack is the default value' if we pass registerUser() , but we pass a arugument its will over come like 'stringstack' become 'Venkatesh' if we pass arugument only.

console.log(registerUser("Venkatesh"));

// object as parament

const user = {
  id: 1,
  name: "Bala",
}; //we can pass as object as well as json also .

function logInUser(user) {
  //here the user is object
  return `the user ${user.name} is login with id ${user.id}`;
}

//invoke
const res_login = logInUser(user); // passing arugument as user(object).

console.log(res_login);

console.log(
  logInUser({
    id: 2,
    name: "Ram",
  }),
); // this one also passible .

//if we using the API in the js or React.js we pass josn .

//in java the method doesn't have a another method but in js we have one function inside also another function.

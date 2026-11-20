/*
In Java 
int a = 10 ; anythig its end with ';' is called Statement.

and here a , 10 are the opeator and its peform opeartion , any opeation is called expression

a=10 is a experssion

In JavaScript 
you can defined your function as a part of experssion


When ever we use an opeation , the Experssion also a part 
we can define a funtion as well as Experssion also.()->EX:1.1

*/

const a = 10;
//normal function
// function addDollarSymbol(value) {
//   return "$" + value;
// }  

// console.log(addDollarSymbol(100));

//1.1
const num = function (value) {
  return   "+" + value;
};

console.log(num(10));


//not possible in function with experssion 
// console.log(num1(10));
// const num1 = function (value) {
//   return   "+" + value;
// };//its show error. but its possible in function without Experssion . EX 1.2


//EX 1.2
console.log(addSymbol(40));
function addSymbol(value){
  return '+' + value;
}//Its called hoisting , only in js , but its not good to use , so please avoid 

//General progress is first we declared the function after we call but the hoisting is first we call after we defined. Hoisting is not possible with function wiht eecperssion only possibel with function only 


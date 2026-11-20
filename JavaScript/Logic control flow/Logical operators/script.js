/*
        && , ||

        In java we use && and || its return a true or false value as Boolean type 
        ex: (10 > 5 ) && (5 < 10) its output is true 
        ex1: 10 && 5 its a error . In java but possible in JavaScript and Python.

        for Example:
        10 && 5 ; perform depends on Truthy and falsy value
        10 is ture , 5 is true , the output is last value but if 0 && 5 , here 0 is false and 5 is true the output is false value(0).  both false like 0 || undefined , 0 is false and undefined is fasle here the output is first value(0) .

        10||5 ; perform depends on Truthy and Falsy value
        10 is true , 5 is true , the output is first value but if 0 || 5 , here 0 is false and 5 is true the output is true(5) , both false like 0 || undefined , 0 is false and undefined is fasle here the output is last value(undefined) .


        Ternary operator 
          In java we use like as (10 <20) ? 10 : 20; , but in javascript we use like a 
          (10 < 20) ? 10 : "No" ; and we use like a function also Ex:1.1

*/
// && operation between two numeric values
// console.log(10 && 5);//output: 5
// console.log(10 && 0 && 12);//output: 0
// console.log(10 && "" && 20);//output: ''
// console.log(10 && " " && 30);//output: 30
// console.log(0 && null);//output: 0
console.log(0 && undefined && 10); //output: 0

// || operation between two numeric values

console.log(10 || 5); //output: 10
console.log(0 || 10); //output: 10
console.log(0 || undefined); //output: underfined
console.log(10 || "" || 20); //output: 10
console.log(0 || undefined || 10); //output: 10

/*
    ?? this is one of the operators we see in upcoming class
*/

// Ternary Operators

const res = 10 > 20 ? 10 + 20 : 10 + 40;

console.log(res);

const res1 = 5 < 10 ? "Yes" : "No";

console.log(res1);

//EX:1.1
const res3 =
  10 > 2
    ? () => {
        5 + 2;
      }
    : () => {
        2 + 4;
      };

let name = "Saranya";

const details = `Hi ${name} , welcome to JS`;

console.log(details);

console.log(res3);

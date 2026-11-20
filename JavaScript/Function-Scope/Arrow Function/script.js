/*
    Arrow Function.
    is short hand of writing a function.

    we don't use function keyword

    use => symbol 

    if you use the arrow function , not write a return keyword explicit the arrow function implicit include the return type.EX:1.1
    
    we can pass a object as paremete in Arrow Function.
*/

//normal function
function add(a, b) {
  return a + b;
}

const result = add(10, 20);
console.log(result);

// Arrow Function

const sub = (a, b) => {
  return a - b;
}; // This one is half arrow Function

const res = sub(20, 10);
console.log(res);

//Ex:1.1
//Arrow function are single line functions , where we will implicit return statement
// we can have two return value in arrow function but in normal function we have two return value
const mul = (c, d) => c * d;
const res1 = mul(2, 4);
console.log(res1);

//we can eleminate  the use of () parenthesis when we pass a single parameter
const div = e => e / 5;
const res2 = div(20, 5 ,51);//its still work!
console.log(res2);

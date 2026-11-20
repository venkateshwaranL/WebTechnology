const x = 100;
//Block scope
if (true) {
  console.log(x); //Golbal variabel
  const y = 200;
  console.log(x + y); //Block Variable
}

// console.log(y);//this will give a error , block only work on block scope

// For Loop

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
//use of const varibel is show error because const not be reassign so, use only let or var(but don't use var).

if (true) {
  const a = 100;
  let b = 200;
  var c = 300; //IMPORTANT
} //we can't access the const and let keyword in the outside of the block scope.

console.log(c);
//var variabel ca be accesed out of the block so please don't use var keyword this is one of the reason the var keyword remove from ES6

// Two Reason : -

const s = 45; //this is not one of properties of window Object

// const num = innerWidth; // This one is one of properties of window Object , to check one console in browser and type window + Enter , then its show Window object and expand it . Its show lot of Function , method and properties on that place you find the innerWidth properties

//at the same thing you use const s = 45; you can't find this one .

//but using var variable you find its.

var num = 45; // this belong to Window Object that thing we can't do

//so ES6 remove var keyword in 2015.

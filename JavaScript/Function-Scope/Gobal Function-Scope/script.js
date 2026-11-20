//Window is parent object in js
//  Scope in js
// 1.gobal scope --> All Object
// 2.Function Scope --> Only variable which is part of Function 
// 3.Block Scope --> in another folder(named as Block Scope).

// alert(`I am js`); // here alert is show like a function but alert not belong to object but it's not a function , alert is method belong to Window object .
//Example:
// window.alert("I am methos alert");

//function are independed of object , method are depended on object

// console.log(innerWidth); //one of the properties belong to Window Object

// Gobal Scopes

const x = 100;
//1.Gobal varibale can be accessed anywhere within the console
//2.can be accessed inside a function block and can we accessed inside the block
function run() {
  console.log(x);
  console.log(innerWidth);
  console.log(innerHeight);
}

run();

if (true) {
  console.log(` ${x} is global`);
}

// function scope variable
function add() {
  const a = 2;
  const b = 5;
  var c = 10;
  let d = 9;
  console.log(a + b);
}
// here the const , var and let are use inside the function block variable(Function scope variable) we can't access outside the block. 

// but const , var and let we access as Golbal scope.
console.log(d);
add();

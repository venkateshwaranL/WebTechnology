let x;
const first_name = "String";
const age = 24;
console.log(age);   
console.log(first_name);

//we can use to store the string in three ways
// '' , "" , and `` . 

// x="This is my name "+ first_name + ' and  i am '+ age +" years old";

//Template Literals

x = `This is my name  ${first_name}  and  i am ${age}  years old`;

console.log(x , typeof x);
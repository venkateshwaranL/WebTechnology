let x;
const first_name = 'Venkatesh';
const age = 24;
console.log(age);   
console.log(first_name);

//we can use to store the string in three ways
// '' , "" , and `` . 

// x="This is my name "+ first_name + ' and  i am '+ age +" years old";

//Template Literals

x = `This is my name  ${first_name}  and  i am ${age}  years old`;

//String Object
//In js we have string is primitive type and String also have non-primitive as Object like String Class in Java , new keyword is used for wrapped class in js not for creating Object

const s =new String('Venkatesh');

console.log(typeof s);

//Here the 'const first_name = 'Venkatesh';' and 'const s =new String('Venkatesh');' one are the same if we want to use the String object methosd in java we use s.atChar(); but in js string are also called as primitive date type , here first_name.atChar(); also we use in this type js change in the first_name is an 'Object' so we can use the both type based on the person. 

x  = s.length;//here lenght is property not a method
//access the vlaue

x=s[1];

//change the case
x=s.toUpperCase();
x=s.toLowerCase();

//return the character
x=s.charAt(0);

//occurence of specified value in a String

x=s.indexOf("k");

//search for a string of specified value
//Venkatesh
//012345678
x=s.substring(s.indexOf('k'),s.indexOf('h'));
x=s.substring(5);//use this example

//extracts a part of string and returns a new string is slice();

s.slice();

console.log(x); 
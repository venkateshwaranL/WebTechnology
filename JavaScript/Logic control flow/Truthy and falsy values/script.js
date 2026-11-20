/*
    This are the values which would evaluate an experssion to either true or false.only in js
    true = 1
    false = 0

    Truthy value are:
        true , 1 ,'0' , ' ' -> its space value , {} -> empty object , [] -> empty array ,function(){} -> empty Function 

    falsy value are:
        false , 0 , '' -> its empty string , null -> keyword , undefined -> measn we defined but not assign value , NaN -> its a not a number 

    Important: function(){}; -> this syntax used in React.js hooks redex.
*/

const x = function(){};

if (x) {
  console.log(`This is truthy value`);
} else {
  console.log(`This is falsy value`);
}

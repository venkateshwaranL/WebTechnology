let x;
const foods = ["Idli", "Dosa", "Pongal"];

const junck_foods = ["pizza", "burger", "donuts"];

// foods.push(junck_foods);

// console.log(foods);

// x = foods[3][1].toUpperCase();

// const bad_foods =[foods , junck_foods];

// x=bad_foods[3][1];

// console.log(bad_foods);

//concat Method to add the two array

x=foods.concat(junck_foods);

//spread operator --> ...

x   =[...foods , ...junck_foods];

let y = [10 , 20 , 30,[1,2,3]];

let value = [...y];

console.log(value)

// console.log(x)
 
// flattening

const arr1 = [45,65,78,[12,45,78],[984,321,[45,57,[77,24,687],7826],978]];

x=arr1.flat(Infinity);
//we flat methos for this one --> [6454,654,654,[6849,65498,68],[6849,64,68],6548]
//flat(2) method for this one --> [64654,6546,654,[68,654[6594,684,68],64+8],48]
//flat(Infinity) methos for this one --> [454,654,[65468,6548,[64,13,[67,2,],8,],6,],685]

console.log(x)
console.log(arr1)  
const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.reverse();
arr.push(0);
console.log(arr);

const arr1 = [1, 2, 3, 4, 5];

const arr2 = [5, 6, 7, 8, 9, 10];

arr1.pop();

let value;

value = arr1.concat(arr2); //way 1

value = [...arr1, ...arr2]; //way 2

console.log(value);

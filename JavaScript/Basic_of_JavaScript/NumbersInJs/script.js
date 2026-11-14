let x;
const number = 5;

//Wrapper

const num = new Number(548974615681618746587468449861n);

x = num.toExponential(11);

x = Number.MIN_VALUE;
x = Number.MAX_VALUE;

console.log(x, typeof x);

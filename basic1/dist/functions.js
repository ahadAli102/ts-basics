"use strict";
// named function
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(1, 1));
console.log(add(1, 1, 5));
// function expression
const sub = function (num1, num2, num3 = 2) {
    return num1 - num2 - num3;
};
console.log(sub(10, 5));
console.log(sub(100, 5, 10));
// arrow function
const mul = (num1, num2) => num1 * num2;
console.log(mul(10, 5));
let addNumber;
function addition(num1, num2) {
    return num1;
}

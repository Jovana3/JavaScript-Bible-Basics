// function mult(a, b, c) {
//   let x = a * b * c;
//   console.log(x);
// }

// mult(1, 2, 3);

// const conc = function (a, b) {
//   return a + " " + b;
// };

// console.log(conc("hello", "jo"));

/** 
//  * CHALLENGE 3
//  * 
//  * Create function "outerFunction" with 2 parameters.
//  * Create function inside of the "outerFunction" and name it "innerFunction" with one parameter.
//  * This "innerFunction" will return square of parameter (parameter * parameter).
//  * 
//  * In the "outerFunction" sum both parameters.
//  * Call "innerFunction" with argument that is equal to sum of both parameters of the "outerFunction".
//  * Log to the console result of the "innerFunction" call.
//  */

// function outerFunction(a, b) {
//   function innerFunction(c) {
//     return c * c;
//   }
//   let sum = a + b;
//   let res = innerFunction(sum);
//   console.log(res);
// }
// outerFunction(2, 4);

const myF = function () {};

console.log(myF());

console.log(myF);

setTimeout(function () {
  console.log("JO");
}, 1000);

let x = 1;
// setInterval(function () {
//   ++x;
//   console.log(x);
// }, 1000);

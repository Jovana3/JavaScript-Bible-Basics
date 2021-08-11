/**
 * Variable declaration
 *
 */

var a = 3;
console.log(a);

var b;
b = "JO";
console.log(b);
b = "Jovana";
console.log(b);

/**
 *
 * CONST
 */

const cond = true;

console.log(cond);

// Uncaught TypeError: Assignment to constant variable.
// cond = false;

// Uncaught SyntaxError: Identifier 'cond' has already been declared
// const cond = false;

/**
 *
 * CHALLENGE 1
 *
 */

const myObject = {};
console.log(myObject);

/**
 *
 * CHALLENGE 2
 */

let x = 10;
const y = true;
const obj1 = {
  a: x,
  b: y,
};

console.log(obj1);

x = 20;
let obj2 = {
  a: x,
  b: y,
  c: obj1,
};

console.log(obj2);

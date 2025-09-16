"use strict";
let v1 = "Hola Mundo!";
console.log(typeof v1); // Imprime -> string

v1 = 123;
console.log(typeof v1); // Imprime -> number

v1 = true;
console.log(typeof v1); // Imprime -> boolean

let v2;
console.log(typeof v2); // Imprime -> undefined

// v4 = "Hola"; // ReferenceError: v4 is not defined
const myConst=10;
myConst=200; // Uncaught TypeError: Assignment to constant variable.

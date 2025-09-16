"use strict";

/* let variable = "24";

console.log(Number(variable)+1);
console.log(+variable+1); */

let s1 = "34";

console.log(Number.isNaN(s1));
/* 
let s2 = "14";

console.log(s1 + s2); // 3214 (concatena cadenas)
console.log(Number(s1) + Number(s2)); // 46
console.log(+s1 + +s2); // 46

let nombre = "Juan";
let num = +nombre;
console.log(num); // NaN
console.log(Number.isNaN(num)); // true
console.log(num + 23); // NaN (no se puede operar) */
/* console.log("12" + 13 * 10 - "12"); // 118 ((13 * 10) - 12)

console.log(true ** false); */


console.log(45 && ""); // Prints Hello
console.log(undefined && 145); // Prints undefined
console.log(null || 145); // Prints 145
console.log("" || "Default"); // Prints "Default"
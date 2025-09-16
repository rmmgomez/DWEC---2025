"use strict";

let a;
console.log(a); // undefined

let array = [1,2,3];
console.log(array[6]); // undefined
array[6]=7;
array.length=3;
console.log("Array");
for(let i=0;i<array.length;i++){
    console.log(array[i]); // 1,2,3,undefined,undefined,undefined,7
}

/* 
function f(nombre) {
    console.log(`Hola ${nombre}`);
}

f("Juan"); // Hola Juan
f(); // Hola undefined */

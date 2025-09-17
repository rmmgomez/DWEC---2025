"use strict";
/* let a = new Array(); // Crea un array vacío
a[0] = 13; // Asigna la primera posición del array
console.log(a.length); // Imprime 1
console.log(a[0]); // Imprime 13
console.log(a[1]); // Imprime undefined (posición no asignada aún)

let  a = new Array(12); // Crea un array de tamaño 12
console.log(a.length); // Imprime 12
console.log(a[0]); // Imprime undefined (posición no asignada aún)
a[20] = "Hello";
console.log(a.length); // Ahora imprime 21 (0-20). Las posiciones 0-19 tendrán el valor undefined 


let  a = new Array("a", "b", "c", "d", "e"); // Array con 5 valores
console.log(a[3]); // Imprime "d"
a.length = 2; // Posiciones 2-4 serán destruidas
console.log(a[3]); // Imprime undefined

let  a = ["a", "b", "c", "d", "e"]; // Array de tamaño 5, con 5 valores inicialmente
console.log(typeof a); // Imprime object
console.log(a instanceof Array); // Imprime true. a es una instancia de array
a[a.length] = "f"; // Insertamos un nuevo elemento al final
console.log(a); // Imprime ["a", "b", "c", "d", "e", "f"] */

let  ar = [4, 21, 33, 24, 8];

let i = 0;
while(i < ar.length) { // Imprime 4 21 33 24 8
    console.log(ar[i]);
    i++;
}
for(let i = 0; i < ar.length; i++) { // Imprime 4 21 33 24 8
    console.log(ar[i]);
}
for (let indices in ar) { // Imprime 4 21 33 24 8
    console.log(ar[indices]);
}
for(let item of ar) {
    console.log(item);
}

let str = "abcdefg";

/* for(let letter of str) {
    if(letter.match(/[aeiou]/)) {
        console.log(letter + " es una vocal");
    } else {
        console.log(letter + " es una consonante");
    }
} */

let inserDel = [1,2,3,4,5];
inserDel.push(6, 7);
console.log(inserDel.join()); // [1,2,3,4,5,6,7]
console.log(inserDel.shift());
inserDel.unshift(0, -1);
console.log(inserDel.join(" - ")); // [1,2,3,4,5,6,7]

let s = "12345";
console.log(Array.from(s)); // ['t', 'e', 'n', 'e', 'd', 'o', 'r']

let  a = ["a", "b", "c"];
let  b = ["d", "dsfsde", 6];
let  c = a.concat(b);
console.log(c); // Imprime ["a", "b", "c", "d", "e", "f"]
console.log(a); // Imprime ["a", "b", "c"] . El array original no ha sido modificado
console.log(b);

let inicial = ["a", "b", "w", "x", "e", "f"];
/* console.log(inicial.slice(0,-3).join());

let cadena ="Hola amigos";
console.log(cadena.slice(0,3));
console.log(cadena.substring(0,3)); */
/* console.log(inicial.toSpliced(1, 2, "c", "j"));
console.log(inicial.toSpliced(2, 1, "w"));
inicial[2] = "w"; */


let  invertir = ["a", "b", "c", "d", "e", "f"];
console.log(invertir.toReversed()); // ["f", "e", "d", "c", "b", "a"]
console.log(invertir); // ["a", "b", "c", "d", "e", "f"] -> Array original no modificado

console.log(invertir.reverse()); // Invierte el orden del array original
console.log(invertir); // ["f", "e", "d", "c", "b", "a"]
/* 
let  nombres = ["Peter", "Ànne", "Thomas", "Jen", "Rob", "Alison"];
console.log(nombres.toSorted()); // ["Alison", "Anne", "Jen", "Peter", "Rob", "Thomas"]
console.log(nombres); // ["Peter", "Anne", "Thomas", "Jen", "Rob", "Alison"] -> Original no modificado */

let ordenarNum = [20, 6, 100, 51, 28, 9];
console.log(ordenarNum.toSorted());


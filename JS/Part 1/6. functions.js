"use strict";
sayHello("Tom"); // "Hello Tom"
/* sayHello("Pepe", ,2); */

function sayHello(name = "Guest") {
    console.log("Hello " + name);
}
function sayHello(name = "Guest", edad = 18, altura = 1.84) {
    console.log("Hello " + name + "con edad " + edad + " y altura " + altura);
}

/**
 * 
 * @param {Number} priceUnit 
 * @param {Number} units 
 * @returns 
 */
function totalPrice(priceUnit, units) {
    return priceUnit * units;
}

let total = totalPrice(5.95, 6);
console.log("Resultado: " + totalPrice("5.95", 6));
console.log(total);  // 35.7

let totalPrice2 = function(priceUnit, units) {
    return priceUnit * units;
}

console.log(typeof totalPrice); // "function" (tipo de datos del identificador totalPrice)

console.log(totalPrice(5.95, 6)); // 35.7
let getTotal = totalPrice; // Podemos crear varios identificadores que referencien a la misma función
console.log(getTotal(5.95, 6));  // 35.7


let sum = function(num1, num2) {
    return num1 + num2;
}
console.log(sum(12,5)); // 17

let suma = (num1, num2) => num1 + num2;
console.log(suma(12,5)); // 17

let suma1 = (num1, num2) => {
    console.log(`Sumando ${num1} + ${num2}`);
    return num1 + num2
};

console.log(suma1(12,5)); // 17
let cuadrado = num => num * num; // Si solo hay un parámetro, no hacen falta paréntesis

function saluda(name) {
    name = name ?? "Anonymous";
    console.log("Hello! I'm " + name);
}
saluda(0);

function getTotalPrice(price, tax = price * 0.07) {
    return price + tax;
}

console.log(getTotalPrice(100)); // 107

let global = "Hello";

function changeGlobal() {
    global = "GoodBye";
}

changeGlobal();
console.log(global);
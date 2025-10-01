'use strict';

console.log(window.outerWidth + " - " + outerHeight);
console.log(window.screen.width + " - " + window.screen.height); // Ancho de pantalla y alto (Resolución)
console.log(window.screen.availWidth + " - " + window.screen.availHeight);

// open("https://www.iessanvicente.com");
console.log(window.navigator.userAgent); // Imprime la información del navegador
window.navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
    console.log(position.coords.accuracy);
});

// let idTime = setTimeout(() => console.log(new Date().toString()), 5000);  // Se ejecutará en 5 segundos (5000 ms)
// clearTimeout(idTime);

/* let num = 1; */
/* setInterval(() => console.log(num++), 1000); */

let num = 1;
let idInterval = setInterval(() => {
    console.log(num++);
    if(num > 10) { // Cuando imprimimos 10, paramos el timer para que no se repita más
        clearInterval(idInterval);
    }
}, 1000);

function multiply(num1, num2) {
    console.log("Resultado: " + num1 * num2);
}

setTimeout(multiply, 5000, 5, 7); // Después de 3 segundos imprimirá 35 (5*7)
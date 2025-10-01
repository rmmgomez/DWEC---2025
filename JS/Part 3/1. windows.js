'use strict';

/* console.log(window.outerWidth + " - " + outerHeight);
console.log(window.screen.width + " - " + window.screen.height); // Ancho de pantalla y alto (Resolución)
console.log(window.screen.availWidth + " - " + window.screen.availHeight); */

// open("https://www.iessanvicente.com");
/* console.log(window.navigator.userAgent); // Imprime la información del navegador
window.navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
    console.log(position.coords.accuracy);
}); */

// let idTime = setTimeout(() => console.log(new Date().toString()), 5000);  // Se ejecutará en 5 segundos (5000 ms)
// clearTimeout(idTime);

/* let num = 1; */
/* setInterval(() => console.log(num++), 1000); */

/* let num = 1;
let idInterval = setInterval(() => {
    console.log(num++);
    if(num > 10) { // Cuando imprimimos 10, paramos el timer para que no se repita más
        clearInterval(idInterval);
    }
}, 1000); */

function multiply(num1, num2) {
    console.log("Resultado: " + num1 * num2);
}

// setTimeout(multiply, 5000, 5, 7); // Después de 3 segundos imprimirá 35 (5*7)
console.log(location.hash);

let boton = document.getElementById("idGoogle");
boton.addEventListener("click", () => location.assign("https://google.com"));


let atras = document.getElementById("back");
atras.addEventListener("click", () => history.back());

let sig = document.getElementById("sig");
sig.addEventListener("click", () => history.forward());
const numero = -3;
let retr = document.getElementById("atras2");
retr.addEventListener("click", () => {history.go(numero);
    alert("pulsas");
});

document.getElementById("alert").addEventListener("click", () => 
    alert("Deja la IA")
);

document.getElementById("confirm").addEventListener("click", () => {
    if(confirm("ChatGPT sí o no"))
        console.log("Has dicho que sí");
    else console.log("No te lo crees ni tú");
});

document.getElementById("prompt").addEventListener("click", () => {
    let nombre = prompt("What's your name?", "Nobody");
    if(nombre) {
    console.log("Your name is: " + nombre);
    } else {
        console.log("You didn't answer!");
    }
});


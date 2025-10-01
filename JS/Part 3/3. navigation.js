let firstLi = document.getElementById("firstListElement"); // Devuelve <li>

console.log(firstLi.nodeName); // Imprime "LI"
console.log(firstLi.nodeType); // Imprime 1. (elemento -> 1, atributo -> 2, texto -> 3, comentario -> 8)
console.log(firstLi.firstChild.nodeValue); // Imprime "Element 1". El primer (y único) hijo es un nodo de texto
console.log(firstLi.lastChild);
console.log(firstLi.textContent); // Imprime "Element 1". Otra forma de obtener el contenido (texto)

// Itera a través de todos los elementos de la lista
let liElem = firstLi;
while(liElem !== null) {
    console.log(liElem.innerText); // Imprime el texto de dentro del elemento <li>
    liElem = liElem.nextElementSibling; // Va al siguiente elemento de la lista <li>
}

let ulElem = firstLi.parentElement; // Obtiene el elemento <ul>. Similar a parentNode.
// Otra forma de recorrer los hijos de la lista
Array(ulElem.children).forEach(li => console.log(li.textContent));
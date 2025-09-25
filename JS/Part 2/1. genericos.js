/* let obj = new Object();
obj.nombre = "Peter"; // Añadimos la propiedad 'nombre' usando la notación del punto
obj["edad"] = 41; // Añadimos la propiedad 'edad' usando la notación de un array asociativo
obj.getInfo = function() { // Creamos un nuevo método → getInfo()
    return "Mi nombre es " + this.nombre + " y tengo " + this.edad
}


console.log(obj.getInfo()); // Imprime "Mi nombre es Peter y tengo 41"
console.log(obj.nombre); // Imprime "Peter". Accedemos al nombre usando la notación del punto
console.log(obj["nombre"]); // Imprime "Peter". Ahora accedemos con la notación del array asociativo
let prop = "nombre";
console.log(obj[prop]); // Imprime "Peter". Podemos acceder a la propiedad “nombre” a partir de una variable que almacena el nombre de dicha propiedad (sólo para la notación de array) */

let rect = {
    ancho  : 10,
    alto: 5,
    hermanos: [3,5,6,7,8,89,9],
    primos : [
        {tio: "pepe", pri: "Juan"},
        {tio: "lola", pri: "lolita"},
        {tio: "marcos", pri: "carlitos"}
    ],
    calcularArea(){ return this.ancho * this.alto;}
}
console.log(rect.calcularArea());
console.log(rect.hermanos.filter(h => h%2 !==0 && h > 5));
console.log(rect.primos[2]["pri"]);
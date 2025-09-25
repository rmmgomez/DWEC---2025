/* class Product { }

console.log(typeof Product); // Imprime "function". Internamente sigue siendo una función como en versiones antiguas */
'use strict';
/* class Product {
    #nombre;
    #precio;
    constructor(nombre, precio) {
        this.#nombre = nombre;
        this.#precio = precio;
    }
    getDescuento(descuento) {
        let totalDesc = this.#precio * descuento / 100;
        return this.#precio - totalDesc;
    }
    getNombre(){return this.#nombre;}
    getPrecio(){return this.#precio;}
    set nombre(nombre){this.#nombre = nombre;}
}

let p = new Product("Producto", 50);
console.log(p.getDescuento(2)); // Product {nombre: "Producto", precio: 50}
console.log(p.getNombre());
p.nombre = "Pepe";
console.log(p.getNombre()); */

class Empleado {
    static #sueldoMinimo = 15000;

    constructor(nombre, sueldo = Empleado.#sueldoMinimo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    /* static creaBecario(nombre) {
        return new Empleado(nombre, Empleado.#sueldoMinimo);
    } */
}

let e = new Empleado("Pepe")
console.log(e); // Empleado {nombre: 'Elena', sueldo: '15000'}
console.log();

class Triangulo{
    #altura;
    #base;
    constructor(altura, base){
        this.#altura = altura;
        this.#base = base;
    }
    getAltura(){return this.#altura;}
    getBase(){return this.#base;}
    setAltura(altura){ this.#altura = altura; }
    setBase(base){ this.#base = base;}
    area() {return this.#base * this.#altura / 2 ;}
}
let carlos = new Triangulo(3,4);
console.log(carlos.area());
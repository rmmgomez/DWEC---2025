'use strict';

class Vehiculo {
    #marca;
    #año;
    #color;
    constructor(marca, año, color) {
        this.#marca = marca;
        this.#año = año;        
        this.#color = color;
    }
    mostrarDetalles() {
        console.log(`Este es un vehículo de la marca ${this.#marca}, del año ${this.#año} y de color ${this.#color}.`);
    }
    encender() {
        console.log("El motor se ha encendido. ¡rum rum! 🚗");
    }
    get marca(){
        return this.#marca;
    }
    getAño(){
        return this.#año;
    }
}

class Automovil extends Vehiculo {
    #modelo;
    #numeroDePuertas;
    #tipoMotor;

    constructor(marca, año, color, modelo, numeroDePuertas, tipoMotor) {
        super(marca, año, color);
        this.#modelo = modelo;
        this.#numeroDePuertas = numeroDePuertas;
        this.#tipoMotor = tipoMotor;
    }

    toString() {
        console.log(`Es un ${this.marca} ${this.#modelo} del año ${this.getAño()}. Tiene ${this.#numeroDePuertas} puertas y un motor de ${this.#tipoMotor}.`);
    }

    encender() {
        console.log(`El motor ${this.#tipoMotor} del ${this.modelo} se ha encendido. ¡El coche está listo! 🏁`);
    }
    getModelo(){ return this.#modelo;}    
}

const miAuto = new Automovil('Toyota', 2023, 'rojo', 'Corolla', 4, 'gasolina');
/* miAuto.mostrarDetalles(); */
miAuto.toString();
/* miAuto.encender();
console.log(`Marca: ${miAuto.marca}`);
console.log(`Modelo: ${miAuto.modelo}`);
console.log(`Color: ${miAuto.color}`); */
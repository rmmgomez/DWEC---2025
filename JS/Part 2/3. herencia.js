class User {
    constructor(name, edad) {
        this.name = name;
        this.edad= edad;
    }

    sayHello() {
        console.log(`Hola, soy ${this.name}`);
    }
    
    sayType() {
        console.log("Soy un usuario");
    }
    valueOf(){
        return this.edad;
    }
}

class Admin extends User {
    constructor(name, edad) {
        super(name, edad); // Llamamos al constructor de User
    }

    sayType() { // Método sobrescrito
        super.sayType(); // Llamamos a User.sayType (método del padre)
        console.log("Pero también un admin");
    }
}

let admin = new Admin("Anthony", 12);
admin.sayHello(); // Imprime "Hola, soy Anthony"
admin.sayType(); // Imprime "Soy un usuario" y "Pero también un admin"
console.log(admin);
let admin2 = new Admin("Pepe", 24);
let admin3 = new Admin("Juanito", 11);
console.log(admin2);
console.log("el mayor es: " + (admin < admin2));
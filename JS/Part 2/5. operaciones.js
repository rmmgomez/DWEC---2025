/* let usuario = {
    id: 3,
    nombre: "Pedro",
    email: "peter@gmail.com"
}

let {id, nombre, email} = usuario;

console.log(nombre); // Imprime "Pedro"

function configGame(options) {
    let defaults = {
        name: "Player 1",
        level: 1,
        difficulty: "normal",
        gender: "female"
    };

    let config = {...defaults, ...options}; // Combinamos el objeto defaults con options
    console.log(config);    
}

let options = {
    name: "Super Master",
    gender: "male",
    edad: 34
};
configGame(options); // {name: "Super Master", level: 1, difficulty: "normal", gender: "male"} */

const coche = {
  marca: 'Ford',
  modelo: 'Mustang',
   // motor: {
     // cilindros: 8,
     // ruedas: 3
   // }
};

const ejemplo = [1,2,3,4,5];
ejemplo[8] = 23;
console.log(ejemplo[24]?.toString() ?? "Hola");
/* const cilindros = coche?.motor?.ruedas ?? "No hay ruedas";
console.log(cilindros); // undefined (no hay error) */

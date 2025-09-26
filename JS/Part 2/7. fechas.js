let date2 = new Date(2015, 5);
console.log(date2);

let a = ['perro', 'gato', 'pez', 'loro'];

const formatter = new Intl.ListFormat('es', { type: 'conjunction' });
console.log(formatter.format(a)); // perro, gato, pez y loro

const formatter2 = new Intl.ListFormat('es', {  type: 'disjunction' });
console.log(formatter2.format(a)); // perro, gato, pez o loro

const formatter3 = new Intl.ListFormat('es', { style: 'short', type: 'unit' });
console.log(formatter3.format(a)); // perro, gato, pez, loro


let numero = 45.6;
console.log(new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(numero));

let date = new Date('2022-04-25');
console.log(new Intl.DateTimeFormat('es-ES', {
    dateStyle: "long"
}).format(date));
console.log(new Intl.DateTimeFormat('es-ES', {
    dateStyle: "full"
}).format(date));
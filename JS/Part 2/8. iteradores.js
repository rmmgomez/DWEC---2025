const a = ["hola", "adiós", "casa", "coche"];
const iterador = Iterator.from(a);

console.log(
  iterador
    .flatMap((s) => [...s])
    .filter((l) => /[aeiouáéíóú]/.test(l))
    .map((l) => l.toUpperCase())
    .take(5)
    .toArray()
);
// ['O', 'A', 'A', 'I', 'Ó']
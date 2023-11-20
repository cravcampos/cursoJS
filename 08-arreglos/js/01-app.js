// crear arreglos

// Se utilizan los [] y separados por , cada valor
const numeros = [10, 20, 30, 40, 50];
console.log(numeros);

// otra forma de crear arreglos es
const meses = new Array("Enero", "Febrero", "Marzo", "Abril"); // se utiliza la palabra new Array y van entre ()
console.log(meses);

// NO es obligratorio que los elementos del arreglo sean del mismo tipo de dato
const deTodo = [
  "Hola",
  610,
  true,
  "si",
  null,
  { nombre: "Victor", trabajo: "Profesional de SI" },
  [1, 2, 3, 4],
];

console.log(deTodo);

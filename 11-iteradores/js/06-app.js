// .forEach
// es ideal para recorrer arreglos

let pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JS"];

// recorrer con un forEach
pendientes.forEach((pendiente, indice) => {
  console.log(`${indice}: ${pendiente}`);
});

// En una sola linea la llave y el parentesis ppuede ser opcional
const carrito = [
  { id: 1, producto: "Libro" },
  { id: 2, producto: "Camisa" },
  { id: 3, producto: "Disco" },
];

carrito.forEach((producto) => console.log(`Agregaste ${producto.producto}`));

console.log("Ejemplos usando Map");
// ejemplo usando .map la diferencia es que map crea un nuevo arreglo
let pendientes2 = ["Tarea", "Comer", "Proyecto", "Estudiar JS"];

// recorrer con un forEach
pendientes2.map((pendiente, indice) => {
  console.log(`${indice}: ${pendiente}`);
});

// En una sola linea la llave y el parentesis ppuede ser opcional
const carrito2 = [
  { id: 1, producto: "Libro" },
  { id: 2, producto: "Camisa" },
  { id: 3, producto: "Disco" },
];

const carrito3 = carrito2.map((producto) => producto.producto);

console.log(carrito3);

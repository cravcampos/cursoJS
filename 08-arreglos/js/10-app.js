const carrrito = [
  { nombre: "Monitor 29 Pulgadas", precio: 999000 },
  { nombre: "Televisor 65 pulgadas", precio: 1999000 },
  { nombre: "Ipad 9na GE", precio: 990000 },
  { nombre: "Audifonos JBL", precio: 300000 },
  { nombre: "Teclado y Mouse Logitech", precio: 199000 },
  { nombre: "Iphone 11 128GB Blanco", precio: 2600000 },
];

// Recorrer un arreglo con .map()
// La diferencia con forEach es que este saca una copia ddel arreglo en uno nuevo
const nuevoArreglo = carrrito.map(function (producto) {
  return `${producto.nombre} - ${producto.precio}`;
});

// El forEach solo sirve para recorrer el arreglo no se puede asignar a una variable
// el resultado en consola sera undefined
const nuevoArreglo2 = carrrito.forEach(function (producto) {
  return `${producto.nombre} - ${producto.precio}`;
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);

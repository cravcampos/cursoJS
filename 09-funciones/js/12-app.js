const carrito = [
  { nombre: "Monitor 29 Pulgadas", precio: 999000 },
  { nombre: "Televisor 65 pulgadas", precio: 1999000 },
  { nombre: "Ipad 9na GE", precio: 990000 },
  { nombre: "Audífonos JBL", precio: 300000 },
  { nombre: "Teclado y Mouse Logitech", precio: 199000 },
  { nombre: "Iphone 11 128GB Blanco", precio: 2600000 },
];

// Ejemplo de map con un arrow function
const nuevoArreglo = carrrito.map(
  (producto) => `${producto.nombre} - ${producto.precio}`
);

// ejemplo de forEach con arrow function
carrito.forEach((producto) => `${producto.nombre} - ${producto.precio}`);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);

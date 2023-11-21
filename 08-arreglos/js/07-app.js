const carrito = [];

const producto = {
  nombre: "Monitor LG 29 pulgadas UltraWide",
  precio: 999900,
};
const producto2 = {
  nombre: "Iphone 11 128 GB Blanco",
  precio: 2500000,
};

const producto3 = {
  nombre: "Teclado Logitech",
  precio: 600000,
};

const producto4 = {
  nombre: "Teclado Logitech",
  precio: 600000,
};

const producto5 = {
  nombre: "Teclado Logitech",
  precio: 600000,
};
const producto6 = {
  nombre: "Teclado Logitech",
  precio: 600000,
};

carrito.unshift(
  producto6,
  producto5,
  producto4,
  producto3,
  producto2,
  producto
);
console.table(carrito);

// eliminar el ultimo valor de un arreglo
carrito.pop();
console.table(carrito);

// Eliminiar el primer elemento del arreglo
carrito.shift();
console.table(carrito);

// Eliminar de cualquier posicion del arreglo .splice(inicio, fin)
carrito.splice(1, 3); // El segundo parametro es el que indica cuantos elementos vamos a borrar
console.table(carrito);

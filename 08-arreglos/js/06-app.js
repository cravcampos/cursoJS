// Ejemplo de un carrito de compras
const carrito = [];

// Añadir un elemento al carrito
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

console.table(carrito);

// para añadir productos al carrito con el operador ...rest este realiza una copia del
// array original en otro con el nuevo elemento
let resultado = [...carrito, producto];
console.table(resultado);

resultado = [producto2, ...resultado];
console.table(resultado);

// para añadir al inicio del arreglo
resultado = [producto3, ...resultado];
console.table(resultado);

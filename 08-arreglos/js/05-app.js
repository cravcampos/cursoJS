const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
console.table(meses);

// Agregar al final del arreglo
meses.push("Julio");
console.table(meses);

// Ejemplo de un carrito de compras
const carrito = [];
console.table(carrito);

// Añadir un elemento al carrito
const producto = {
  nombre: "Monitor LG 29 pulgadas UltraWide",
  precio: 999900,
};
const producto2 = {
  nombre: "Iphone 11 128 GB Blanco",
  precio: 2500000,
};

carrito.push(producto);
carrito.push(producto2);

console.table(carrito);

// Agregar al inicio del arreglo desplaza todos los elementos existentes una posicion hacia abajo
const producto3 = {
  nombre: "Teclado Logitech",
  precio: 600000,
};

carrito.unshift(producto3);
console.table(carrito);

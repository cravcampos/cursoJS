const carrrito = [
  { nombre: "Monitor 29 Pulgadas", precio: 999000 },
  { nombre: "Televisor 65 pulgadas", precio: 1999000 },
  { nombre: "Ipad 9na GE", precio: 990000 },
  { nombre: "Audifonos JBL", precio: 300000 },
  { nombre: "Teclado y Mouse Logitech", precio: 199000 },
  { nombre: "Iphone 11 128GB Blanco", precio: 2600000 },
];

// recorriendo el arreglo con un for
for (let i = 0; i < carrrito.length; i++) {
  console.log(`Articulo: ${carrrito[i].nombre} Precio: ${carrrito[i].precio}`);
}

console.log("Recorriendo con forEach");

// recorriendo el arreglo con forEach
carrrito.forEach(function (producto) {
  console.log(`Articulo: ${producto.nombre} Precio: ${producto.precio}`);
});

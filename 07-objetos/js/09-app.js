"use strict";
const producto = {
  nombre: "Monitor 29 pulgadas",
  precio: 999999,
  disponible: true,
};

console.log(producto);

Object.seal(producto);

// permite reasignar las propiedades
producto.nombre = "IPad Novena GEN";
console.log(producto);

// no permite eliminar
// delete producto.disponible;

// tampoco permite añadair nuevas propiedades al objeto
// producto.imagen = "imagen.jpg";

// Verificar si el objeto esta sellado
console.log(Object.isSealed(producto));

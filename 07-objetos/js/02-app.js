// acceder a las propiedades de un objeto

const producto = {
  nombre: "Monitor 29 pulgadas",
  precio: 999999,
  disponible: true,
};

console.log(producto);

// acceder a las propiedades del objeto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// otra forma de acceder a las propiedades del objeto
console.log(producto["nombre"]);
console.log(producto["precio"]);
console.log(producto["disponible"]);

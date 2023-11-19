const producto = {
  nombre: "Monitor 29 pulgadas",
  precio: 999999,
  disponible: true,
};

console.log(producto);

// Agregar nuevas propiedades al objeto
producto.image = "imagen.jpg"; // si se realiza por fuera del objeto se debe utilizar = para asignar
console.log(producto);

// Eliminar propiedades de un objeto
delete producto.disponible;
console.log(producto);

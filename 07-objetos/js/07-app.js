const producto = {
  nombre: "Monitor 29 pulgadas",
  precio: 999999,
  disponible: true,
};

console.log(producto);

// en el caso de los objetos asi esten declarados con const si se pueden modiifcar sus propiedades
producto.disponible = false;

console.log(producto);

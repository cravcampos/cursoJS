const producto = {
  nombre: "Monitor 29 pulgadas",
  precio: 999999,
  disponible: true,
};

console.log(producto);

// Asignar el valor de una propiedad a una variable
//const nombre = producto.nombre;
//console.log(nombre);

// Crear la variable y guardar el valor en un solo paso destructuring
const { precio } = producto;
console.log(precio);

// estraer varios valores a la vez usando destructuring
const { nombre, disponible } = producto;
console.log(nombre);
console.log(disponible);

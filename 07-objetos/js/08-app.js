"use strict";
const producto = {
  nombre: "Monitor 29 pulgadas",
  precio: 999999,
  disponible: true,
};

console.log(producto);

// para no permitir la modificacion de iun objeto utilizaremos la palabra
// "use strict" al inicio

// esto nos habilita los Object Method o metodos de objetos.

// para prevenir que un objeto sea modificado podemos usar el metodo freeze
// esto nos da un error en consola al tratar de agregar una nueva propiedad
Object.freeze(producto);
// producto.disponible = false;
console.log(producto);

// averiguar si un objeto esta en modo freeze
console.log(Object.isFrozen(producto)); // retorna true si esta en modo freeze

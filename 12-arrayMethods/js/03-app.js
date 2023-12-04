// metodo .reduce
const carrito = [
  { nombre: "Monitor de 27 pulgadas", precio: 500 },
  { nombre: "Televisor de 65 pulgadas", precio: 1000 },
  { nombre: "Ipad Novena GE", precio: 900 },
  { nombre: "Audifonos", precio: 160 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 2500 },
];

// obtener el total con un forEach
let total = 0;
carrito.forEach((producto) => (total += producto.precio));
console.log(total);

// obtener el total con un .reduc
// se debe pasar el nombre de la variable primero luego la variable iteradora
// y por ultimo el valor inicial

let resultado2 = carrito.reduce(
  (total, producto) => total + producto.precio,
  0
);

console.log(resultado2);

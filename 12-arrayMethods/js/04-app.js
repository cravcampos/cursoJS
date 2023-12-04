// metodo filter
// crea un nuevo arreglo basado en el parametro de busquedad
const carrito = [
  { nombre: "Monitor de 27 pulgadas", precio: 500 },
  { nombre: "Televisor de 65 pulgadas", precio: 1000 },
  { nombre: "Ipad Novena GE", precio: 900 },
  { nombre: "Audifonos", precio: 160 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 2500 },
];

// obtener todos los productos que su precio sea mayor a 500
let resultado;
resultado = carrito.filter((producto) => producto.precio > 500);
console.log(resultado);

// obtener todos los productos que su precio sea menor a 200

resultado = carrito.filter((producto) => producto.precio < 200);
console.log(resultado);

// obtener todos los productos excepto el teclado
resultado = carrito.filter((producto) => producto.nombre !== "Teclado");
console.log(resultado);

// obtener el producto teclado
resultado = carrito.filter((producto) => producto.nombre === "Teclado");
console.log(resultado);

// metodo .find
// Retorna la primera coincidencia que se encuentre en el arreglo
// Crea un nuevo arreglo con la busquedad

const carrito = [
  { nombre: "Monitor de 27 pulgadas", precio: 500 },
  { nombre: "Televisor de 65 pulgadas", precio: 1000 },
  { nombre: "Ipad Novena GE", precio: 900 },
  { nombre: "Audifonos", precio: 160 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 2500 },
];

// Obtener del arreglo carrito los audifonos
//  con forEach
let resultado = "";
carrito.forEach((producto, index) => {
  if (producto.nombre === "Audifonos") {
    resultado = carrito[index];
  }
});

console.log(resultado);

// Usando el metodo .find
const resultado2 = carrito.find((producto) => producto.nombre === "Audifonos");
console.log(resultado2);

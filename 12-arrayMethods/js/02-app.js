const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor de 27 pulgadas", precio: 500 },
  { nombre: "Televisor de 65 pulgadas", precio: 1000 },
  { nombre: "Ipad Novena GE", precio: 900 },
  { nombre: "Audifonos", precio: 160 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 2500 },
];

// Encontrar la posicion de Mayo en el arreglo de forma manual
meses.forEach((mes, i) => {
  if (mes === "Mayo") {
    console.log(`${mes} encontrado en la posicion ${i}`);
  }
});

// encontar el indice de mayo findIndex retorna la posicion en el arreglo
// si no se encuentra retorna un -1
const resultado = meses.findIndex((mes) => mes === "Mayo");
console.log(resultado);

// verificando un arreglo de  apenas encuantra la primera coincidencia retorna el valor y para
// la ejecucion
const posicion = carrito.findIndex(
  (producto) => producto.nombre === "Audifonos"
);

console.log(`La posicion del producto es ${posicion}`);

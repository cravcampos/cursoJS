// El rest operator es muy util para crear un nuevo arreglo sin modificar el original
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor de 27 pulgadas", precio: 500 },
  { nombre: "Televisor de 65 pulgadas", precio: 1000 },
  { nombre: "Ipad Novena GE", precio: 900 },
  { nombre: "Audifonos", precio: 160 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 2500 },
];

// Spread operator con arreglo de indices agrenado al inicio
const meses2 = ["Agosto", ...meses];
console.log(meses2);

// Spread operator con arreglo de indices agrenado al final
const meses3 = [...meses, "Agosto"];
console.log(meses3);

// Spread operator agregando un nuevo producto al carrito
const producto = { nombre: "Disco Duro", precio: 300 };
const carrito2 = [...carrito, producto];
console.log(carrito2);

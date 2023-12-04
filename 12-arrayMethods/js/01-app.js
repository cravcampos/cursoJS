const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor de 27 pulgadas", precio: 500 },
  { nombre: "Televisor de 65 pulgadas", precio: 1000 },
  { nombre: "Ipad Novena GE", precio: 900 },
  { nombre: "Audifonos", precio: 160 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 2500 },
];

// Verificar si un valor existe en un arreglo manual

meses.forEach((mes) => {
  if (mes === "Enero") {
    console.log(`${mes} si existe`);
  }
});

// Usando el metodo .includes retorna true o false en un arreglo con indices
const resultado = meses.includes("Enero");
console.log(resultado);

// Usando el metodo .some en un arreglo de objetos retorna true o false
const existe = carrito.some((producto) => {
  return producto.nombre === "Teclado";
});
console.log(existe);

// realizando lo anterior de forma mas compacta
const existe2 = carrito.some((producto) => producto.nombre === "Monitor Curvo");

console.log(existe2);

// metodo .every

// Verifica que una condicion se cumpla en todos los objetos
// retorna true o false

const carrito = [
  { nombre: "Monitor de 27 pulgadas", precio: 500 },
  { nombre: "Televisor de 65 pulgadas", precio: 1000 },
  { nombre: "Ipad Novena GE", precio: 900 },
  { nombre: "Audifonos", precio: 160 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 2500 },
];

// verificar si todos los objetos su prcio es menor a 2500
const resultado = carrito.every((producto) => producto.precio <= 2500);
console.log(resultado);

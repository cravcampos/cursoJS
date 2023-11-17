// var era la forma de crear variables en versiones anteriores de ECMAScript hoy en dia
// las opciones se reducen a 2

// las reglas son basicamente las mismas.

// variables con let

let producto = "Monitor 27 Pulgadas"; // Inicializamos una variable con un valor.

// las variables tambien se pueden reasignar
producto = "Monitor de 24 pulgadas";

console.log(producto);

// JavaScript es un lenguaje de tipado dinamico,
// no se debe especificar tipos de datos cuando se crea la variable
// se crea la variable
let precio = 200;
console.log(precio);

// Tambien se puede crear una variables in valor y asignarlo despues
let disponible;
disponible = true;
console.log(disponible);

// Inicializar multiples variables
let categoria = "Computadoras",
  marca = "HP",
  clasificacion = 5;

console.log(categoria);
console.log(marca);
console.log(clasificacion);

//Reglas de las variables
//Pueden tener letras, numeros, _
// NO pueden iniciar con numeros

// let 99dias; //Genera error
let dias99;

let _01;
// var 01_; //Genera error

//Estilos para nombrar las variables con màs de una sola palabra
let nombreProducto = "Monitor 30 Pulgadas"; //Estilo CamelCase
let nombre_producto = "Monitor 30 pulgadas"; //Estilo underscore
let NombreProducto = "Monitor 30 Pulgadas"; //Pascal Case se utiliza en clases
let nombreproducto = "Monitor 30 pulgadas";

console.log(nombreProducto);
console.log(nombre_producto);
console.log(NombreProducto);
console.log(nombreproducto);

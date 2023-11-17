// Las variables son una caracteristica de cualquier lenguaje de programacion

// existen 3 formas de crear variables en JS, en las nuevas versiones solo se utilizan 2:

// variables con var

var producto = "Monitor 27 Pulgadas"; // Inicializamos una variable con un valor.

// las variables tambien se pueden reasignar
producto = "Monitor de 24 pulgadas";

console.log(producto);

// JavaScript es un lenguaje de tipado dinamico,
// no se debe especificar tipos de datos cuando se crea la variable
// se crea la variable
var precio = 200;
console.log(precio);

// Tambien se puede crear una variables in valor y asignarlo despues
var disponible;
disponible = true;
console.log(disponible);

// Inicializar multiples variables
var categoria = "Computadoras",
  marca = "HP",
  clasificacion = 5;

console.log(categoria);
console.log(marca);
console.log(clasificacion);

//Reglas de las variables
//Pueden tener letras, numeros, _
// NO pueden iniciar con numeros

// var 99dias; //Genera error
var dias99;

var _01;
// var 01_; //Genera error

//Estilos para nombrar las variables con màs de una sola palabra
var nombreProducto = "Monitor 30 Pulgadas"; //Estilo CamelCase
var nombre_producto = "Monitor 30 pulgadas"; //Estilo underscore
var NombreProducto = "Monitor 30 Pulgadas"; //Pascal Case se utiliza en clases
var nombreproducto = "Monitor 30 pulgadas";

console.log(nombreProducto);
console.log(nombre_producto);
console.log(NombreProducto);
console.log(nombreproducto);

// Los strings o cadenas de texto representan un texto que se puede asignar a una variable
// existen tres formas de crearlos que son las màs populares.

// primera forma con comillas dobles o comillas sencillas
const producto = "Monitor de 30 pulgadas";
const producto1 = "Monitor 27 pulgadas";

console.log(producto);
console.log(producto1);

// la siguiente forma es menos comun
const producto2 = String("Monitor de 24 Pulgadas");
console.log(producto2);

// la siguiente forma es la menos comun de todas
const producto3 = new String("Monitor de 19 pulgadas"); // esto crea un objeto de tipo cadena
console.log(producto3);

// Algunas reglas para crear strings
const producto4 = "Monitor 20 pulgadas"; //utiliza comillas sencillas
const producto5 = "Monitor 20 pulgadas"; //utiliza comillas dobles

// NO se puede mezclar el uso de las comillas
// const producto = "Monitor 20 pulgadas'; Genera error

// Ejemplo para usar comillas dentro de un texto
const producto6 = 'Monitor de 19"'; // se utiliza barra invertida

console.log(producto4);
console.log(producto5);
console.log(producto6);

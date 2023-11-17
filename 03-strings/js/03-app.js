// vamos a concatenar o unir 2 textos o variables
const producto = "Monitor 29 Pulgadas";
const precio = "30 USD";

console.log(producto.concat(" En Descuento")); // Concatenar un string
console.log(producto.concat(" ").concat(precio)); //Concatenar una variables

// Otras formas de concatenar
console.log(producto + " " + precio);
console.log(producto + " con un precio de " + precio);
console.log("El producto " + producto + " tiene un precio de " + precio); // Esta forma puede ser complicada en textos largos
console.log("El producto", producto, "tiene un precio de", precio); // Esta forma puede ser complicada en textos largos

// ES6 trajo consigo una mejor forma de concatenar variables que es algo llamado template String
// o template literal
console.log(`El producto ${producto} tiene un precio de ${precio}`);

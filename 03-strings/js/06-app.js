const producto = "Monitor de 29 pulgadas";

// Repeat: permite repetir una cadena de texto
const texto = " en Promocion".repeat(3);
console.log(producto.repeat(3));
console.log(producto.repeat(2.7)); // va a redondear al entero
console.log(`${producto}${texto} !!!`);

// Split: permite dividir un string dependiendo el caracter que se indique
const actividad = "Estoy trabajando con JavaScript y aprendiendo";
console.log(actividad.split(" "));

const prueba = "Esto*es*una*prueba*de*que*funciona";
console.log(prueba.split("*"));

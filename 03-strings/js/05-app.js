const producto = "Monitor de 29 pulgadas";

// Replace: Permite remplazar palabras en un string
console.log(producto);
console.log(producto.replace("pulgadas", '"'));
console.log(producto.replace("29", "32"));

// Slice permite extraer una parte de una cadena
console.log(producto.slice(0, 10)); // inicia en 0 y corta hasta 10
console.log(producto.slice(8)); // Corta desde el 8 hasta el fin de la cadena
console.log(producto.slice(2, 10)); // Corta desde el 2 hasta el 10
console.log(producto.slice(2, 1)); // Si el primer numero es mayor no va a cortar hacia atras

// Substring permite extraer una parte de una cadena
console.log(producto.substring(0, 10));
console.log(producto.substring(5, 1)); // Si el numero es mayor al segundo, va a cortar hacia atras

// Ejemplo de uso en la vida real
const nombre = "Victor";
const apellido = "Campos";

console.log(nombre.charAt(0).concat(apellido.charAt(0)));

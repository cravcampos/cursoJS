const producto = "          Monitor de 29 pulgadas          ";

console.log(producto);
console.log(producto.length);

// Eliminar al inicio
console.log(producto.trimStart()); //elimina todos los espacios en blanco del inicio
console.log(producto.trimEnd()); //elimina todos los espacios en blanco del final

// los metodos en JS se pueden encadenar, es decir, colocar uno junto al otro
console.log(producto.trimStart().trimEnd()); // esta linea de codigo corta en ambas direcciones

// el metodo mas uasado es trim que corta en ambbas direcciones
console.log(producto.trim());

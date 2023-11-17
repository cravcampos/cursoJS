// Algunos metodos existentes en los string o cadenas de texto

const producto = "Monitor de 30 pulgadas";
// Conocer la extension de una cadena, length es de los pocos metodos que no utiliza ()
// es porque es tratado como una propiedad y no como un metodo.
console.log(producto.length);

//IndexOf busca la posicion de inicio de la palabra buscada es sensitivo a mayusculas y minusculas
console.log(producto.indexOf("Monitor")); // indica la posicion en la que esta el texto
console.log(producto.indexOf("pulgadas")); // indica la posicion en la que esta el texto
console.log(producto.indexOf("De")); // -1 significa que no pudo encontrar la palabra buscada

// Includes retorna true o false si la palabra buscada existe es sensitivo a mayusculas y minusculas
console.log(producto.includes("Monitor")); // indica true si existe la palabra
console.log(producto.includes("pulgadas")); // indica true si existe la palabra
console.log(producto.includes("De")); // indica false si NO existe la palabra

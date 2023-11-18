// El orden en el que se ejecutan las operaciones es igual al que se ejecutan matematicamente
let resultado;

resultado = 20 + 30 * 2; // en este caso ejecuta primero la multiplicacion
console.log(resultado);

resultado = (20 + 30) * 2;
console.log(resultado); // en este caso resuelve primero el parentesis y luego lo que esta afuera

// Calcular el 20% de descuento de un carrito de compras
resultado = (20 + 10 + 30 + 40 + 50 + 60) * 0.2;
console.log(resultado);

// Ejemplo de funciones que retornan un valor

// Cuando se quiere una variable que retorne un valor se utiliza la palabra reservada return
// En este caso como se retorna un valor es necesario asignar dicho valor a una nueva variable

function sumar(a, b) {
  return a + b;
}

const resultado = sumar(5, 605);

console.log(resultado);

// Ejemplo 2
let total = 0;

function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return total * 0.19;
}

function totalPagar(total, impuesto) {
  return total + impuesto;
}

total = agregarCarrito(999000);
total = agregarCarrito(1000);
total = agregarCarrito(1000000);
console.log(`El total de los productos sin IVA es: ${total}`);

const impuesto = calcularImpuesto(total);
console.log(`El total de impuestos de la compra es: ${impuesto}`);

const valorFinal = totalPagar(total, impuesto);
console.log(`El total a pagar es: ${valorFinal}`);

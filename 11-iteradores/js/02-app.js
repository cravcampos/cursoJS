// Ejemplo de break y continue con for

// Finalizar el ciclo cunado llegue al numero 5

// Se usa la palabra reservada break para salir de cualquier ciclo
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log(`estamos en el numero: ${i} por esto se finaliza el ciclo`);
    break;
  }
  console.log(`estamos en el numero: ${i}`);
}

// ejemplo de imprimir los numeros del 1 al 20 imprimiendo el 0 como letra, el 10 como letra
// y el 20 como letra
for (let i = 0; i <= 20; i++) {
  if (i === 0 || i === 10 || i === 20) {
    if (i === 0) {
      console.log("Cero");
      continue;
    }
    if (i === 10) {
      console.log("Diez");
      continue;
    }
    if (i === 20) {
      console.log("Veinte");
      continue;
    }
  }
  console.log(i);
}

// ejemplo usando un carrito compras para un articulo con descuento
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisor de 65 pulgadas", precio: 750 },
  { nombre: "Tablet", precio: 300, descuento: true },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50, descuento: true },
  { nombre: "Celular", precio: 500 },
];

for (let i = 0; i <= carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`el articulo ${carrito[i].nombre} tiene descuento...`);
    continue;
  }
  console.log(carrito[i].nombre);
}

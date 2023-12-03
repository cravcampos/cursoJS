// ciclo for
// se ejecutan hasta que una condicion se cumpla o se deje de cumplir
// el ciclo for se ejecuta hasta que una condicion se cumpla

// Partes de un for
// for()
// condicion
// incremento o decremento

for (let i = 0; i < 10; i++) {
  console.log(`numero: ${i}`);
}

// incrementando de 2 en dos
for (let i = 0; i < 20; i += 2) {
  console.log(`numero: ${i}`);
}

// Ejemplo de numeros pares e impares
for (let i = 0; i <= 100; i++) {
  if (i === 0) {
    console.log(`el numero ${i} no es par ni impar`);
  } else if (i % 2 == 0) {
    console.log(`el numero ${i} es par`);
  } else {
    console.log(`el numero ${i} es impar`);
  }
}

// ejemplo recorriendo un carrito de compras
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisor de 65 pulgadas", precio: 750 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
];

for (let i = 0; i <= carrito.length; i++) {
  console.log(`producto: ${carrito[i].nombre} \nprecio: ${carrito[i].precio}`);
}

// Ciclo for in
// A diferencia del ciclo for of este sirve para recorrer objetos

let pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JS"];

// si recorremos un arreglo nos mostrara los indices del mismo
for (let pendiente in pendientes) {
  console.log(pendiente);
}

const carrito = { nombre: "Monitor 27 Pulgadas", precio: 500 };

for (let producto in carrito) {
  console.log(`${carrito[producto]}`);
}

// otra forma de recorrer el carrito
for (let [llave, valor] of Object.entries(carrito)) {
  console.log(llave + ": " + valor);
}

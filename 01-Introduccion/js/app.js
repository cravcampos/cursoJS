// Leccion 1 creando archivo independiente de JS
// alert("Hola Mundo");

// Que se puede hacer con JS
/*
const nombre = prompt("Cual es tu Nombre");
document.querySelector(
  ".contenido"
).innerHTML = `${nombre} esta aprendiendo JS`;
*/

// forma de comentar codigo en linea en JS
/* forma de comentar codigo en bloque en JS */

// La consola de JS
// Se pueden crear varibles e imprimirlas
const hola = "Hola desde la consola";
console.log(hola);

// Crear arreglos desde la consola
console.log(["1,2,3,4"]);

// Crear objetos desde la consola
let obj = {
  nombre: "Victor",
  apellido: "Campos",
};
console.log(obj);

// Mostrar resultados como una tabla
console.table([1, 2, 3, 4, 5]);

// Mostrar un erros desde la consola
console.error("Este es un mensaje de error");

// Mostrar un mensaje de advertencia desde la consola
console.warn("Esto es un mensaje de advertencia");

// Limpiar la consola
//console.clear();

// monitorear el tiempo que tarda en ejecutarse algo
console.time("Hola");
console.warn("Esto no esta permitido");
console.warn("Esto no esta permitido");
console.warn("Esto no esta permitido");
console.warn("Esto no esta permitido");
console.warn("Esto no esta permitido");
console.warn("Esto no esta permitido");
console.warn("Esto no esta permitido");
console.warn("Esto no esta permitido");
console.warn("Esto no esta permitido");
console.warn("Esto no esta permitido");
console.timeEnd("Hola");

//Consideraciones del uso de ; con JS
// JavaScript tiene una caracteristica, a diferencia de otros lenguajes de programación el ;
// al final no es obligarorio salvo que tengas dos lineas de codigo en una misma
// Ejemplo
// console.log('Victor')
// console.log('Campos')

// Esto va a funcionar, pero si tienes un codigo desordenado; no va a funcionar salvo que se
// ponga el ;
// console.log('Victor'); console.log('Campos');

// Como recomendación pon una iinstrucción por linea, no es obligatorio salvo el caso que vimos
// anteriormente pero va a facilitar mucho la lectura del codigo.

// ahora, vamos a crear una funcion

// function hola(){
// console.log('Hola');
// }

// En el caso anterior la funcion va a funcionar sin embargo es buena practica dar espcio o tab
// al codigo interno de la funcion.

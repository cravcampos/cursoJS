// Muestra todos los elementos que encuentre en el documento
// Se debe usar la misma sintaxis de css

const cards = document.querySelectorAll(".card");
console.log(cards);

const formularios = document.querySelectorAll("#formulario");
console.log(formularios);

const navegaciones = document.querySelectorAll("nav");
console.log(navegaciones);

// Si no existe retorna un arreglo vacio
const noExiste = document.querySelectorAll(".no-existe");
console.log(noExiste);

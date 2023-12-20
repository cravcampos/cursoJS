// Event Bubbling
// Sucede cuando una accion de evento se propaga a las demas que tiene dentro
// Ejemplo tenemos un card dentro tenemos un info y dentro tenemos un titulo
// Si los tres tienen evento al dar click en titulo hara disparar los otros dos eventos
// es decir se dispara el evento de info y card y asi sucesivamente.

// Solucion a este problema
const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const titulo = document.querySelector(".titulo");

cardDiv.addEventListener("click", (e) => {
  e.stopPropagation(); // Funcion para evitar la propagacion en burbuja del evento
  console.log("click en card...");
});

infoDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en info...");
});

titulo.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click en titulo...");
});

// Muestra la primera coincidencia que encuentre
// se debe usar la misma sintaxis de css

const card = document.querySelector(".card");
console.log(card);

const info = document.querySelector(".premium .info");
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector(
  "section.hospedaje .card:nth-child(2)"
);
console.log(segundoCard);

// Seleccionando ids con querySelector
const formulario = document.querySelector("#formulario");
console.log(formulario);

// Seleccionando un elemento por su etiqueta html
const navegacion = document.querySelector("nav");
console.log(navegacion);

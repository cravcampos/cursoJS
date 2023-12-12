// navegando en el documento

const navegacion = document.querySelector(".navegacion");

console.log(navegacion);

// trayendo los elementos con childNodes cada salto de lines es considerado un elemento
console.log(navegacion.childNodes);

// trayendo los elementos con children solo lista los que son HTML
console.log(navegacion.children);

// Acceder a los elementos con childres uno por uno
console.log(navegacion.children[2]);

// seleccionar la primera card
const card = document.querySelector(".card");
console.log(card);

// listar los hijos de la primera card
console.log(card.children);

// acceder al hijo info
console.log(card.children[1]);

// listar los hijos de info
console.log(card.children[1].children);

// accceder al titulo
console.log(card.children[1].children[1]);

// modificar el texto del titulo
newTitle = "DJ Victor Campos";
card.children[1].children[1].textContent = newTitle;

// recorrer desde un hijo hacia el padre
console.log(card.parentElement);

// recorrer desde el hijo hasta el html
console.log(
  card.parentElement.parentElement.parentElement.parentElement.parentElement
);

// otra forma de pasar de un elemento a otro
console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

// ir directamente a uno de los elementos
const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard);

// ir hacia atras entre los cards
console.log(ultimoCard.previousElementSibling);
console.log(ultimoCard.previousElementSibling.previousElementSibling);

// traer el primer elemento de la navegacion
console.log(navegacion.firstElementChild);

// traer el ultimo elemento de la navegacio
console.log(navegacion.lastElementChild);

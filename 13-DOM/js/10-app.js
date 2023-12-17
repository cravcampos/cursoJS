const enlace = document.createElement("a");

// Agregando el texto a mostrar
enlace.textContent = "Google";

// agregando href
enlace.href = "https://www.google.com.co";

// agregando target
enlace.target = "_blank";

// Seleccionando el lugar donde lo vamos a colocar
const navegacion = document.querySelector(".navegacion");

// agregando a el final del elemento seleccionado
navegacion.appendChild(enlace);

// agregando el enlace creado en una posicion especifica de los elementos seleccionados
navegacion.insertBefore(enlace, navegacion.children[1]);

console.log(enlace);

// Ejemplo 2 Creando un card

// Creando los textos del card

const parrafo1 = document.createElement("p");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");
console.log(parrafo1);

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Concierto de Salsa Rosa";
parrafo2.classList.add("titulo");
console.log(parrafo2);

const parrafo3 = document.createElement("p");
parrafo3.textContent = "$1500 por persona";
parrafo3.classList.add("precio");
console.log(parrafo3);

// creando el div para encerrar el card
const info = document.createElement("div");
info.classList.add("info");

// agregando nuestros textos al div info
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
console.log(info);

// crear imagen del cvrad
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";
imagen.alt = "hacer2";
console.log(imagen);

// crear el card
const card = document.createElement("div");
card.classList.add("card");

// agregando todo al card
card.appendChild(imagen);
card.appendChild(info);

console.log(card);

// agregando el card a nuesto html
const cards = document.querySelector(".contenedor-cards");
cards.appendChild(card);

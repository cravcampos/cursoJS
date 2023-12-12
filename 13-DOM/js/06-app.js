// modificar encabezado

const encabezado = document.querySelector(".contenido-hero h1");
console.log(encabezado);

// traer el texto
console.log(encabezado.innerText); // no encuentra el testo si esta oculto con visibility: hidden
console.log(encabezado.textContent);

// traer el texto y el HTML
console.log(encabezado.innerHTML);

// modificando el h1
const newH1 = "Los mejores hospedajes para tus vacaciones";
document.querySelector(".contenido-hero h1").textContent = newH1;

// modificar la primera imagen de las cards
const imagen = document.querySelector(".card img");
imagen.src = "img/populares4.jpg";

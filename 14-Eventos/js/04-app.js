// evento submit en un formulario

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Buscando...");
  console.log(e);
});

// conocer el metodo que usa el boton
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Buscando...");
  console.log(e.target.method);
});

// conocer la url a la que nos enviara el boton
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Buscando...");
  console.log(e.target.action);
});

// hacer lo mismo pero desde una funcion
function validarformulario(e) {
  e.preventDefault();
  console.log("Buscando desde una función");
  console.log(e.target.action);
}

formulario.addEventListener("submit", validarformulario);

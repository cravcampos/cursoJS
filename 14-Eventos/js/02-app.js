// Eventos con el mouse

const nav = document.querySelector(".navegacion");
console.log(nav);

// Registrar un evento

nav.addEventListener("click", () => {
  console.log("click en la navegacion");
});

// Registrando el evento de entrar a la navegacion
nav.addEventListener("mouseenter", () => {
  console.log("entrando a nuestra clase navegacion");
  nav.style.backgroundColor = "white";
});

// Registrando el evento de salir de la navegacion
nav.addEventListener("mouseout", () => {
  console.log("saliendo de nuestra clase navegacion");
  nav.style.backgroundColor = "transparent";
});

// otros eventos del mouse pueden ser
// mousedown - similar a dar click
// click
// dblclick - doble click
// mouseup - cunados e suelta el mouse

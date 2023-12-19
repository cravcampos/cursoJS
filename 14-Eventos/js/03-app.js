// Eventos con el teclado

const busqueda = document.querySelector(".busqueda");

// ejemplo de cuando se inicia a escribir en el formulario keydown
busqueda.addEventListener("keydown", () => {
  console.log("Ejemplo de keydown");
});

// // ejemplo de cuando se inicia a escribir pero soltamos la tecla en el formulario keyup
busqueda.addEventListener("keyup", () => {
  console.log("Ejemplo de key up");
});

// ejemplo de cuando se inicia a escribir pero salimos del foco del formulario blur
busqueda.addEventListener("blur", () => {
  console.log("Ejemplo de blur");
});

// ejemplo de copy se utiliza cuando copio el texto escrito en el formulario con ctrl + c copy
busqueda.addEventListener("copy", () => {
  console.log("Ejemplo de copy");
});

// ejemplo de paste se ejecuta cuando pego el texto en el formulario con ctrl + v paste
busqueda.addEventListener("paste", () => {
  console.log("Ejemplo de paste");
});

// ejemplo de cut se ejecuta cuando corto el texto en el formulario con ctrl + x cut
busqueda.addEventListener("cut", () => {
  console.log("Ejemplo de cut");
});

// ejemplo de input se ejecuta de todas las formas anteriores excepto el blur
busqueda.addEventListener("input", () => {
  console.log("Ejemplo de input");
});

// ejemplo pasando el evento para saber el elemento que se esta usando
busqueda.addEventListener("input", (e) => {
  console.log(e);
});

// ejemplo pasando el evento  y tipo para saber el elemento que se esta usando
busqueda.addEventListener("input", (e) => {
  console.log(e.type);
});

// ejemplo pasando el evento  y target para saber el elemento que se esta usando
busqueda.addEventListener("input", (e) => {
  console.log(e.target);
});

// ejemplo pasando el evento, target y value para saber que se esta escribiendo
busqueda.addEventListener("input", (e) => {
  console.log(e.target.value);
});

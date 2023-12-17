// Eliminar con el metodo remove

const primerEnlace = document.querySelector("a");
primerEnlace.remove();
console.log(primerEnlace);

// Eliminar desde el padre se hace en base a la posicion del elemento a elimnar con el metodo .children
const enlace = document.querySelector(".navegacion");
console.log(enlace.children);

enlace.removeChild(enlace.children[2]);
console.log(enlace.children);

const header = document.getElementsByClassName("header");
console.log(header);

const hero = document.getElementsByClassName("hero");
console.log(hero);

// si las clases existen mas de una vez las listara donde se utilizan
const contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores);

// En caso de que no exista la clase devuelve un array vacio
const noExiste = document.getElementsByClassName("no-existe");
console.log(noExiste);

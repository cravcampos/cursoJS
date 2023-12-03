// Buenas practicas usando if

const autenticado = true;

// cuando se evalua por un boolean en el if no es necesario igualar a true
if (autenticado) {
  console.log("El usuario esta autenticado");
}

// Si se desea evaluar dos condiciones lo recomndado es hacer los if por separado y colocarlos
// en una funcion

const puntaje = 450;
function revisarPuntaje() {
  if (puntaje > 400) {
    console.log("Excelente!!!");
    return; //Se utiliza para parar la ejecucion del codigo luego que se cumpla la condicion
  }

  if (puntaje > 300) {
    console.log("Buen puntaje... Felicidades");
    return;
  }
}

revisarPuntaje();

// existe otra forma de comparar di un valor es verdadero y es por medio de algo
// llamado un operador ternario

const autenticado = false;

if (autenticado) {
  console.log("Bienvenido!!!");
} else {
  console.log("Error");
}

// con el operador ternario queda asi
console.log(autenticado ? "Bienvenido!!!" : "Error");

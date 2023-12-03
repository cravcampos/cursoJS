// operador ternario

const autenticado = true;
const puedePagar = false;

// se utilizan los simbolos ? y :
// Despues del ? se coloca la validacion para verdadero
// Despues de los : se coloca la validacion para falso

console.log(autenticado ? "Si esta autenticado" : "No esta autenticado");

// ejemplo con el operadopr &&
console.log(autenticado && puedePagar ? "Si puede pagar" : "No puede pagar");

// ejemplo con el operadopr ||
console.log(autenticado || puedePagar ? "Si puede pagar" : "No puede pagar");

// ejemplo de operador ternario anidado
console.log(
  autenticado
    ? puedePagar
      ? "Si puede pagar"
      : "esta autenticado pero no puede pagar"
    : "No esta autenticado"
);

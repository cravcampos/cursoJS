// Ejeemplo de parametros o argumeentos en una funcion

function sumar(a, b) {
  // a y b son los parametros que se le pueden pasar a la funcion
  console.log(a + b);
}

sumar(610, 20);

function greet(name, lastName) {
  // nombre y apellido son parametros que se pueden enviar a la funcion
  console.log(`Hola ${name} ${lastName} como estas?`);
}

greet("Victor", "Campos"); // Ejemplo de parametros enviados a la funcion

greet(); // Cuando no se le pasan parametros a la funcion devuelve undefined

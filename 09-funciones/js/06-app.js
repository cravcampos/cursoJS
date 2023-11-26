// Ejemplo de parametros por default

// para indicar parametros opcionales se debe colocar en la definicion de la funcion el valor por
// defecto que debe tomar el parametro en caso de no ser enviado.

// indicando el nombre del parametro seguido de igual y el valor que va a tomar por defecto dicho
// parametro

function greet(name = "desconocido", lastName = "") {
  console.log(`Hola ${name} ${lastName} como estas?`);
}

greet("Victor", "Campos"); // Ejemplo de parametros enviados a la funcion

greet(); // Cuando no se le pasan parametros a la funcion devuelve undefined

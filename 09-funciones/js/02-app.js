// Hoisting

// Ademas de las muy notables diferencias en sintaxis, si llamamos la funcion antes de declararla,
// el Function Declaration va a funcionar bien, mientras que el Function Expression nos va a generar
// un error.

// Declaracion de funcion (Function Declaration)
sumar();
function sumar() {
  console.log(2 + 2);
}

// Expresion de funcion (Function Expression)
sumar2();
const sumar2 = function () {
  console.log(3 + 3);
};

// Eso pasa porque JS se ejecuta digamos en 2 vueltas - eso se le conoce como Hoisting, la primera
// vuelta registra todas las funciones y determina las variables, esta estapa se le llama creacion,
// la segunda vuelta pasada es la que ejecuta el codigo, se llama ejecucion.

// por lo tanto el primer codigo funciona porque function se registra primero y despues se ejecuta
// el codigo.

// El segundo codigo no funciona porque si bieen es una funcion no es declarada como tal, es decir,
// se ve como una variable.

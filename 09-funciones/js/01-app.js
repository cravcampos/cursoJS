// las funciones en cualquier lenguaje de programación son una serie de proceedimientos o
// instrucciones, que realizan una accion.

// * Una ventaja de las funciones es que permiten tener un codigo mas ordenado facil de mantener.
// * Otra ventaja de las funciones es que son reutilizables.
// * Se puede tener una funcion que valide un formulario y utilizarla en todos los formularios,
// se puede tener tambien una funcion que envie datos al servidor y reutilizarla multiples veces

// * Para crear una funcion se utiliza la palabra reservada function seguida del nombre de la
// funcion y parentesis () seguido de {}
// * Dentro de los {} se especifica que realiza la funcion.

// Declaracion de funcion ( Function Declaration)
// Tiene las mismas reglas de las variables para nombrarlas

function sumar() {
  console.log(2 + 2);
}

// llamar las funciones
sumar();

// Expresion de funcion (Function Expression)
const sumar2 = function () {
  console.log(3 + 3);
};

sumar2();

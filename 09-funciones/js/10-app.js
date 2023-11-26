// Arrow Functions o funciones flecha

// Funcion tradicional
const aprendiendo = function () {
  console.log("Aprendiendo JS funcion normal");
};

// Function con arrow Function
const aprendiendo2 = () => {
  console.log("Aprendiendo JS arrow function");
};

// Cuando solo se tiene una linea de codigo se pueden omitir las llaves
const aprendiendo3 = () =>
  console.log("Aprendiendo JS arrow function 1 sola linea");

// incluso si es una sola linea los arrow function tienne implicito el valor a devolver
const aprendiendo4 = () => "Aprendiendo JS 1 sola linea return implicito";

aprendiendo();
aprendiendo2();
aprendiendo3();
aprendiendo4();

// comparar bolleans es exactamente igual que cualquier comparacion de
// numeros o strings

const boolean = true;
const boolean1 = false;

console.log(boolean === boolean1); // compara las dos variables con su tipo de dato

console.log(boolean === true); // comparar si el boolean es verdadero
console.log(boolean1 === false); // comparar si el boolean es falso

// ejemplo de uso de booleans
if (boolean1 === true) {
  console.log("SI es verdadero");
} else {
  console.log("NO es verdadero");
}

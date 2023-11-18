const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;
const numero5 = 20.2;

console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(numero4);
console.log(numero5);

// convertir de string a numeros enteros
console.log(Number.parseInt(numero1));

// convertir de string a numero flotante
console.log(Number.parseFloat(numero2));

// Revisiar si un numeroe s entero o no
console.log(Number.isInteger(numero4));

// Revisar si un numero es finito
console.log(Number.isFinite(numero5));

// convertir de numero a string
console.log(numero4.toString());

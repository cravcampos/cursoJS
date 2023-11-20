const numeros = [10, 20, 30, 40, 50, [60, 70, 80]];
console.table(numeros);

// Ejemplo de acceder a los valoresde un arreglo
console.log(numeros[2]);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[20]); // es undefined porque no encuentra esa posicion

// Ejemplo para acceder en un arreglo dentro de otro arreglo se conoce como matriz
console.log(numeros[5][0]);
console.log(numeros[5][1]);
console.log(numeros[5][2]);

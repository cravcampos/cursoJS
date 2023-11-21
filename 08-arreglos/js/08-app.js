// Destructuring de arreglos
// en el caso de los arreglos se puede asignar el nombre que se desee

const numeros = [10, 20, 30, 40, 50, 60];
console.table(numeros);

// ejemplo de obtener la primera posicion y asignarla a una variable
const [primero] = numeros;
console.log(primero);

// Ejemplo de extraer otra posicion en le arreglo en ese caso solo separamos con una ,
const [, , tercero] = numeros;
console.log(tercero);

// obtener el primero el tercer y los demas en otro arreglo
const [primero1, , tercero1, ...nuevoArreglo] = numeros;
console.log(primero1);
console.log(tercero1);
console.log(nuevoArreglo);

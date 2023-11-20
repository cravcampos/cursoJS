// Al igual que los objetos un arreglo puede modificar a pesar de utilizar la palabra const
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
console.table(meses);

// modificando el primer element
meses[0] = "enero";
console.table(meses);

// agregando un elemento al final del arreglo
meses[6] = "Julio";
console.table(meses);

// agregando al fianl del arreglo de una forma mas automatica
meses[meses.length] = "Agosto";
console.table(meses);

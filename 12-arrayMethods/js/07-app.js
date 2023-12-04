// unir dos arreglos con .concat
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const meses2 = ["Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Usando metodo .concat
const mesesAno = meses.concat(meses2);
console.log(mesesAno);

// Usando rest operator
const resultado = [...meses, ...meses2];
console.log(resultado);

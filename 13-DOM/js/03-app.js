// a diferencia de las clases los id solo se pueden usar una vez por documento
// en caso de existir dos o mas id nombrados igual solo va  aretornar el primero que encuentre

// Seleccionar el formulario por su id
const formulario = document.getElementById("formulario");
console.log(formulario);

// si buscamos algo que no existe retorna un null
const noExiste = document.getElementById("no-existe");
console.log(noExiste);

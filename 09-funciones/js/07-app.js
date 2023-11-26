// Comunicacion entre funciones

// Las funciones se pueden llamar una dentro de la otra
// Deben ser pequeñas y realizar algo especifico
// Puen llevar o no parametros

iniciarApp();

function iniciarApp() {
  console.log("Iniciando App....");
  segundaFuncion();
}

function segundaFuncion() {
  console.log("Desde la segunda funcion...");
  usuarioAutenticado("Victor Campos");
}

function usuarioAutenticado(usuario) {
  console.log(`Usuario ${usuario} Autenticado correctamente...`);
}

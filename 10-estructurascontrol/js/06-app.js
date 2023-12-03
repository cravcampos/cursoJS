// operador &&
// Revisa que se cumplan dos condiciones o mas a la vez

const usuario = false;
const puedePagar = true;

if (usuario && puedePagar) {
  console.log("Pedido realizado con exito!!!");
} else if (!usuario) {
  console.log("Inicia sesion para realizar tu pedido");
} else if (!puedePagar) {
  console.log("Fondos insuficientes");
} else {
  console.log("Hubo un error en tu pago");
}

const dinero = 100;
const totalPagar = 500;
const tarjeta = true;
const cheque = true;

// el hecho de tener varios else if no implica que se vayan a ejecutar todos solo se
// ejecuta la primera conndicion que se cumpla. Recordando que el codigo se ejecuta de
// arriba abajo

if (dinero >= totalPagar) {
  console.log("Si se puede pagar");
} else if (cheque) {
  console.log("Podemos pagar con cheque");
} else if (tarjeta) {
  console.log("Podemos pagar con tarjeta");
} else {
  console.log("Fondos Insuficientes");
}

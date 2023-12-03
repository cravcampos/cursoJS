// el operador or ||
// Revisa que almenos una de las condiciones se cumpla

const efectivo = 1000;
const credito = 500;
const disponible = efectivo + credito;
const totalCarrito = 700;

if (efectivo > totalCarrito || credito > totalCarrito) {
  console.log("Puedes pagar con efectivo o credito");
} else if (disponible >= totalCarrito) {
  console.log("paga con ambos");
} else {
  console.log("No puedes pagar");
}

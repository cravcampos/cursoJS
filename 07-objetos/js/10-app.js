const producto = {
  nombre: "Monitor 29 pulgadas",
  precio: 999999,
  disponible: true,
};

const medidas = {
  peso: "5Kg",
  medida: "73cm",
};

console.log(producto);
console.log(medidas);

// unir dos objetos con el metodo llamado asssing
const resultado = Object.assign(producto, medidas);
console.log(resultado);

// otra forma de unir dos objetos es con el operador rest Operator o spread Operator
const resultado2 = { ...producto, ...medidas };
console.log(resultado2);

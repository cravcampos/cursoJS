// Los objetos son la pieza principal en JS, en lugar de crcear diferentes variables

const nombreProducto = "Monitor 20 pulgadas";
const precio = 999999;
const disponible = true;

// POdemos crear un objeto que agrupe toda esta informacion en una sola variable
const producto = {
  // esto se conoce como object literal
};

// las llaves despues del igual representan un objeto

const producto1 = {
  nombre: "", // esto se conoce como una propiedad o llave del objeto
};

const producto2 = {
  nombre: "Monitor de 20 pulgadas", // en lugar del = se utilizan : para asignar valores
};

// Para agregar mas propiedades se realiza de la siguiente forma
const producto3 = {
  nombre: "Monitor 29 pulgadas", // la , sirve para separar las propiedades si no esta es error
  preci0: 999999,
  disponible: true, // la ultima propiedad puedo o no tenel la ,
};

console.log(producto);
console.log(producto1);
console.log(producto2);
console.log(producto3);

const producto = {
  nombre: "Monitor 29 pulgadas",
  precio: 999999,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      // palabra reservada this hace referencia  alos valores que existen en el mismo objeto
      `El producto: ${this.nombre} tiene un precio de: ${this.precio}`
    );
  },
};
console.log(producto);

console.log(Object.keys(producto)); // retorna un arreglo con los nombres de las propiedades
console.log(Object.values(producto)); // retorna un arreglo con los valores alamacenados en el objeto
console.log(Object.entries(producto)); // retorna una matriz de llave valor

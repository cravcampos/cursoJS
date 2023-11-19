const producto = {
  nombre: "Monitor 29 pulgadas",
  precio: 999999,
  disponible: true,
  informacion: {
    medidas: {
      peso: "5Kg",
      medida: "73cm",
    },
    fabricante: {
      pais: "China",
    },
  },
};

console.log(producto);

// accediendo a cada uno de las propiedades del objeto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);
console.log(producto.informacion);
console.log(producto.informacion.medidas);
console.log(producto.informacion.medidas.peso);
console.log(producto.informacion.medidas.medida);
console.log(producto.informacion.fabricante);
console.log(producto.informacion.fabricante.pais);

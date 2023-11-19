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

// usando destructurin para extraer propiedades del objeto
const {
  nombre,
  informacion,
  informacion: { medidas },
  informacion: {
    medidas: { peso, medida },
  },
  informacion: {
    fabricante: { pais },
  },
} = producto;
console.log(nombre);
console.log(informacion);
console.log(medidas);
console.log(peso);
console.log(medida);
console.log(pais);

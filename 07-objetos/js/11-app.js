const producto = {
  nombre: "Monitor 29 pulgadas",
  precio: 999999,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      // palabra reservada this hace referencia  alos valores que existen en el mismo objeto
      `El producto: ${nombre} tiene un precio de: ${precio}`
    );
  },
};

producto.mostrarInfo();

const producto2 = {
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

producto2.mostrarInfo();

// Object Literal
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

// Object Constructor
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto("Monitor de 27 pulgadas Samsung", 899999);
console.log(producto2);

const producto3 = new Producto("Monitor de 24 pulgadas Samsung", 799999);
console.log(producto3);

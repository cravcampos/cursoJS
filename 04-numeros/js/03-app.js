// Math es parte de la ventana global de JS tiene una serie  de operaciones que pueden ser muy utiles

let resultado;

// numero PI
resultado = Math.PI;
console.log(resultado);

// redondear
resultado = Math.round(6.5);
console.log(resultado);

// redondear hacia abajo
resultado = Math.ceil(2.99);
console.log(resultado);

// redondear hacia arriba
resultado = Math.floor(2.1);
console.log(resultado);

// Raiz Cuadrada
resultado = Math.sqrt(144);
console.log(resultado);

// Valor absoluto
resultado = Math.abs(-610);
console.log(resultado);

// potencia
resultado = Math.pow(8, 3);
console.log(resultado);

// minimo
resultado = Math.min(3, 5, 8, 9, 4, 6, -3);
console.log(resultado);

// maximo
resultado = Math.max(3, 5, 2, 10, 610, 25);
console.log(resultado);

// numero ramdom entre 0 y 1
resultado = Math.random();
console.log(resultado);

// numero ramdom entre 0 y 100
resultado = Math.floor(Math.random() * 100);
console.log(resultado);

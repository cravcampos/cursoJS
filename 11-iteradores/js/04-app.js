// ejemplo de ciclo while
// se ejecuta mientras la condicion sea verdadera
// consta de tres partes partes
// solo se ejecuta si la condicion se cumple en caso contrario no hace nada

// while
// () condicion
// incremento o decremento

// imprimir en consola los numeros de 1 a 10 con el ciclo while

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log(
  "Ejercicio 2 \nimprimir en consola los numeros de 20 a 1 con el ciclo while"
);

// imprimir en consola los numeros de 20 a 1 con el ciclo while
let j = 20;
while (j >= 1) {
  console.log(j);
  j--;
}

console.log("Ejercicio 3 \nFIZZ BUZZ con ciclo while");

let k = 1;
while (k <= 100) {
  if (k % 3 === 0 && k % 5 === 0) {
    console.log(`${k} : FIZZ BUZZ`);
  } else if (k % 3 === 0) {
    console.log(`${k} : FIZZ`);
  } else if (k % 5 === 0) {
    console.log(`${k} : BUZZ`);
  }
  console.log(k);
  k++;
  continue;
}

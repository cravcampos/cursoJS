// Reto de Fizz Buzz
// Fizz Buzz es un reto que complica mucho a los programadores,
// básicamente si un número es múltiplo de 3 imprimes FIZ,
// si es múltiplo de 5 imprimes BUZZ y
// si es múltiplo de ambos como 15, 30, 45 debes imprimir FIZZ BUZZ.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} : FIZZ BUZZ`);
    continue;
  } else if (i % 3 === 0) {
    console.log(`${i} : FIZZ`);
    continue;
  } else if (i % 5 === 0) {
    console.log(`${i} : BUZZ`);
    continue;
  }
  console.log(i);
}

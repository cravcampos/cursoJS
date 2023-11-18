// Null y Undefined

// En JavaScript existen diferentes tipos de datos primitivos a los que hemos visto, ademas
// de string y number se tienen boolean que son true o false y existen un par mas llamados
// undefined y null

// Undefined
let numero;
console.log(numero); // la variableeesta definida pero su valor NO, por lo tanto es undefined
console.log(typeof numero);

// El caso de NULL es mas bien asignarlo
let numero2 = null;
console.log(numero2);
console.log(typeof numero2); // Es un tipo de dato objeto

// Comparando null y undefined
console.log(numero == numero2);

// En estos casos es mejor compararlo con el operador estricto, de esta forma evitamos
// errores en el codigo con valores falsos
console.log(numero === numero2);

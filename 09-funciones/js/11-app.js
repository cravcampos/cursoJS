// paso de parámetros a una function normal
const aprendiendo = function (tecnologia) {
    console.log(`Aprendiendo ${tecnologia} función normal`);
};
aprendiendo('JS')

// Cuando se tiene un solo parámetro el paréntesis es opcional
const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia} arrow function`;
console.log(aprendiendo2('JS'));

// Cuando es más de un parámetro el paréntesis es obligatorio
const aprendiendo3 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo3('JS', 'Angular'));
const encabezado = document.querySelector("h1");
console.log(encabezado);

// cambiar el color a el encabezado
encabezado.style.backgroundColor = "red";

// cambiar la fuente a el encabezado
encabezado.style.fontFamily = "Arial";

// Poner en mayusculas el encabezado
encabezado.style.textTransform = "uppercase";

// agergar una nueva clase mediante JS
const card = document.querySelector(".card");
card.classList.add("nueva-clase", "otra-clase");
console.log(card);

// Remover una clase
card.classList.remove("card");
console.log(card);

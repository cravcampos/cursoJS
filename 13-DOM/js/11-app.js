const btnFlotante = document.querySelector(".btn-flotante");
console.log(btnFlotante);

const footer = document.querySelector(".footer");
console.log(footer);

btnFlotante.addEventListener("click", mostrarOcultarFooter);

function mostrarOcultarFooter() {
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    btnFlotante.classList.remove("activo");
    btnFlotante.textContent = "Idioma y Moneda";
  } else {
    footer.classList.add("activo");
    btnFlotante.classList.add("activo");
    btnFlotante.textContent = "X Cerrar";
  }
}

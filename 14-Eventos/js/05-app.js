// Eventos de scroll

window.addEventListener("scroll", () => {
  const premium = document.querySelector(".premium");
  const ubicacion = premium.getBoundingClientRect(); // funcion para saber que tanto scroll se ha dado

  console.log(ubicacion);

  if (ubicacion.top < 784) {
    console.log("El elemento ya esta visible");
  } else {
    console.log("Aun no, da mas scroll");
  }
});

// saber la posicion del scroll en el eje y
window.addEventListener("scroll", () => {
  const scrollPX = window.scrollY;
  console.log(scrollPX);
});

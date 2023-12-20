// Prevenir event Bubbling con Delegation

const cardDiv = document.querySelector(".card");

// Identificar a que le estamos dando click
cardDiv.addEventListener("click", (e) => {
  console.log(e.target);
});

// Identificar las clases del elemento al que le estamos dando click
cardDiv.addEventListener("click", (e) => {
  console.log(e.target.classList);
});

// creando nuestro validador de donde se dio click
cardDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("titulo")) {
    console.log("Diste click en titulo");
  }

  if (e.target.classList.contains("precio")) {
    console.log("Diste click en precio");
  }

  if (e.target.classList.contains("card")) {
    console.log("Diste click en card");
  }
});

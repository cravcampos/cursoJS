let elemento;

// todo se accede mediante el atributo document
elemento = document;

// Seleccionar todos los elementos
elemento = document.all;

// Seleccionar el head del documento
elemento = document.head;

// Seleccionar todo lo que este dentro del body
elemento = document.body;

// seleccionar el domain actual
elemento = document.domain;

//  Seleccionar los formularios
elemento = document.forms;

// Acceder a el primer formulario
elemento = document.forms[0];

// Accceder al id del formulario
elemento = document.forms[0].id;

// Acceder a las clases del formulario
elemento = document.forms[0].classList;

// Acceder al metodo del formulario
elemento = document.forms[0].method;

// Acceder a el action del formulario
elemento = document.forms[0].action;

// Acceder a los links del documneto
elemento = document.links;

// Acceder a el link en la posicion 4
elemento = document.links[4];

// obtener la lista de clases del elemento en la posicion 5
elemento = document.links[4].classList;

// obtener el nombre de las clases del elemento en la posicion 5 como string
elemento = document.links[4].className;

// Saber cuantas imagenes se estan utilizando
elemento = document.images;

// Saber todos los script en el documento
elemento = document.scripts;

console.log(elemento);

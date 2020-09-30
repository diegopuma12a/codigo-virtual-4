const formulario = document.getElementById("formulario");
const link = document.getElementById("link");
const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
let usuarios = [];

const redibujarTbody = () => {
  /**
   *  1. Limpiar el tbody (borrar todo el innerHTML del tbody)
   *     tbody.innerHTML = "";
   *  2. Crear una variable string vacía
   *  3. Recorrer el arreglo de usuarios (ejm forEach)
   *  4. En el forEach ir agregando al string vacío la estructura
   *     de la fila por cada usuario (concatenar STRINGS)
   *  5. Luego del forEach ó for, settear el innerHTML del tbody
   *     con el string creado
   *  6. Reto: darle estilos a las tablas
   */
};

/**
 * form.onsubmit = evento que se desencadena cuando queremos
 * procesar o enviar el formulario
 */

formulario.addEventListener("submit", (evento) => {
  /**
   * ¿Por qué se actualiza la página con el submit?
   * Porque es el comportamiento por defecto de dicho evento
   * ¿Cómo detener el comporatmiento por defecto de un evento?
   * evento.preventDefault();
   */
  evento.preventDefault();
  console.log("Procesando el formulario...");

  let objUsuario = {
    nombre: inputNombre.value,
    apellido: inputApellido.value,
  };

  usuarios.push(objUsuario);
  console.log(usuarios);
  //RETO: llamar a una función que redibuje el tbody cada vez
  // que nuestro arreglo de usuarios es alterado (cambia de elementos)
});

link.onclick = (evento) => {
  evento.preventDefault();
  console.log("Dieron clic al hipervinculo");
};

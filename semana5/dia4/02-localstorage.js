/**
 * El localstorage es una memoria que tiene nuestro navegador
 * a nivel local.
 * En él, podemos guardar algunos datos del usuario que no sean
 * relevantes, sensibles o críticos.
 * En él, podemos guardar por ejemplo, preferencias (color, tema,
 * ultimo texto copiado, etc)
 * El localstorage es diferente para cada dominio en el mismo equipo
 * EJM:
 * para www.google.com nuestro ordenador tiene un localstorage
 * para www.facebook.com nuestro ordenador tiene un localstorage
 * para www.youtube.com nuestro ordenador tiene un localstorage
 */

const formulario = document.getElementById("formulario");
const inputColor = document.getElementById("inputColor");
const body = document.querySelector("body");
const btnEliminar = document.getElementById("btnEliminar");

btnEliminar.onclick = () => {
  // eliminar un item del localstorage
  // window.localStorage.removeItem("clave");
  window.localStorage.removeItem("color");
  body.style.backgroundColor = "#fff";
};

formulario.onsubmit = (e) => {
  e.preventDefault();
  // guardar el color favorito en el localstorage
  // window.localstorage.setItem("clave","valor")
  // "valor" siempre debe ser un string
  const colorFavorito = inputColor.value;
  window.localStorage.setItem("color", colorFavorito);
  body.style.backgroundColor = colorFavorito;
};

const verificarStorage = () => {
  // Función que obtendrá el color favorito del localstorage
  // y lo colocará como background del body, en caso no exista
  // el localstorage, no sucederá nada.
  // window.localstorage.getItem("clave") = retorna el valor en string
  // de la clave proporcionada

  const colorFavorito = window.localStorage.getItem("color");
  // si el color favorito existe
  if (colorFavorito !== null) {
    body.style.backgroundColor = colorFavorito;
  }
};
verificarStorage();

// (() => {
//   console.log("me ejecuté solita y soy recontra anónima");
// })();

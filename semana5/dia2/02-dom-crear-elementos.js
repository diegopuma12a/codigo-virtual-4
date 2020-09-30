/**
 * Creación de elementos en el DOM
 */
/**
 * document.createElement("nombre_de_la_etiqueta");
 * retorna la referencia a un elemento que aún no está presente en el DOM,
 * pero que será agregado en lo posterior.
 */

const titulo = document.createElement("h1");
titulo.innerText = "Titulo de mi app";

/**
 * element.appendChild(elemento)
 * agrega a un elemento creado a un elemento padre
 * Si el elemento no existía en el DOM, ahora
 * va a estar como un hijo del element
 */

const header = document.getElementById("header");
header.appendChild(titulo);

titulo.innerText = "CodiGo - Bootcamp";

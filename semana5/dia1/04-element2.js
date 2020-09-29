/**
 * element.classList = retorna un arreglo de
 * las clases que un elemento tiene (separado
 * por espacios)
 *
 * element.classList.add("clase_a_agregar") =
 * agrega una clase a la lista de clases de un elemento
 *
 * element.classList.remove("clase_a_eliminar") =
 * eliminar una clase de la lista de clases de un elemento
 *
 * element.classList.toggle("clase_interruptor")=
 * agrega o quita una clase al elemento (funciona como un interruptor)
 */

const header = document.getElementById("header");
console.log("Lista de clases del header");
console.log(header.classList);

header.classList.add("fondo-dark");

const main = document.getElementById("main");
main.classList.remove("fondo-light");

const btnToggle = document.getElementById("botonToggle");

btnToggle.onclick = () => {
  header.classList.toggle("fondo-dark");
};

/**
 * elemento.setAttribue("atributo","valor")
 * Settea el atributo a un elemento del DOM
 * <etiqueta atributo="valor"></etiqueta>
 */

const link = document.getElementById("link");
// forma 1 de settear atributos
// link.setAttribute("href", "https://www.bingo.com");

// forma 2 de settear atributos
// OJO la forma 2 sólo sirve para settear atributos
// OFICIALES de las etiquetas HTML
link.href = "https://www.bingo.com";

// vamos a colocar un atributo que no es oficial
// en la seccion1

const seccion1 = document.getElementById("seccion1");
seccion1.setAttribute("clave", "1234");

/**
 * elemento.getAttribute("nombre_del_atributo");
 * Obtiene el valor del atributo de un elemento en el DOM
 */

console.log(btnToggle.getAttribute("id"));

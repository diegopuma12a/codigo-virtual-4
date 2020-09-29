/**
 * window.document es igual a
 * document
 */

/**
 * Atrapar elementos del DOM con document
 * ¿Atrapar? capturarlos en una variable
 */
/**
 * document.getElementById("id_del_elemento_en_el_dom") retorna
 * una referencia al elemento del dom con el id proporcionado
 */
const header = document.getElementById("header");
console.log(header);

/**
 * document.getElementsByClassName("nombre_de_clase_en_comun").
 * retorna un arreglo de elementos que en el DOM, tengan el mismo
 * nombre de clase
 */
const cajas = document.getElementsByClassName("caja");
console.log(cajas);

console.log(cajas[0]);

// cajas.forEach((elemento) => {
//   console.log(elemento);
// });
/**
 * El código anterior, generará un error porque no es un arreglo nativo
 * por ende, no tiene toooooodas sus funciones
 */

/**
 * TIP ¿Cómo convertir un HTMLCollection o cualquier otra estructura que
 * tenga la forma de un arreglo a un arreglo nativo?
 */

const cajasArray = Array.from(cajas);
console.log(cajasArray);

/**
 * document.querySelector("selector_tipo_css")
 * Devuelve el primer o único elemento que coincida con el selector
 * document.querySelectorAll("selector_tipo_css")
 * Devuelve todos los elementos que coincidan con el selector
 */

const main = document.querySelector("#main");
console.log(main);

/**
 * TODOS LOS ELEMENTOS RETORNADOS POR LOS
 * DISTINTOS SELECTORES
 * son del tipo "ELEMENT"
 */

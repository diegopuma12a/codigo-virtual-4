/**
 * Objeto element y sus propiedades
 */

const titulo = document.getElementById("title");
console.log(titulo);
/**
 * Propiedades
 * element.style.[propiedadCSS]
 * Colocamos estilos como en CSS a los elementos
 */

titulo.style.color = "tomato";
titulo.style.fontSize = "3rem";

const seccion1 = document.getElementById("seccion1");
/**
 * elemento.offsetWidth = Devuelve el ancho de un elemento
 * elemento.offsetHeight = Devuelve el ancho de un elemento
 */
const anchoSeccion1 = seccion1.offsetWidth;
const altoSeccion1 = seccion1.offsetHeight;
console.log(`Ancho de seccion1: ${anchoSeccion1}px`);
console.log(`Alto de seccion1: ${altoSeccion1}px`);

/**
 * elemento.innerHTML = settea o retorna el contenido HTML de un elemento
 * es decir, si colocamos etiquetas, éstas serán renderizadas
 *
 * elemento.innerText = sette o retorna el contenido a nivel de texto de un elemento
 */

const parrafo = document.getElementById("parrafo");
console.log("Contenido HTML del parrafo");
console.log(parrafo.innerHTML);

console.log("Contenido textual del párrafo");
console.log(parrafo.innerText);

const parrafo2 = document.getElementById("parrafo2");
const parrafo3 = document.getElementById("parrafo3");

parrafo2.innerHTML = "<strong>Codigo</strong> <a href='#'>Link1</a>";
parrafo3.innerText = "<strong>Codigo</strong> <a href='#'>Link1</a>";

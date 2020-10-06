/**
 * JQuery, librería de JS para manipuluar el DOM
 * de una manera más fácil y corta
 */

/**
 * Seleccionar uno o más elementos del DOM
 */

const title = $("#title");
/**
 * Propiedades
 * elemento.text()
 * GETTER y SETTER del innerTEXT de un elemento
 *
 */

console.log(title.text());

title.text("Nuevo texto del título");

/**
 * elemento.html()
 * GETTER y SETTER del innerHtml de un elemento
 */
console.log($("#nav-lista").html());
$("#nav-lista").html("<li><a href='#'>Único link</a></li>");

/**
 * Selector multiple.
 * JQuery puede seleccionar varios elementos de acuerdo a la
 * regla del selector
 */

$(".parrafo").html("Nuevo texto del párrafo");

// const parrafos = document.querySelectorAll(".parrafo");
// parrafos.forEach((p) => {
//   p.innerHTML = "Nuevo texto del párrafo";
// });

/**
 * eventos
 * Los eventos son similares a JS puro, sin embargo
 * JQuery intenta reducir código a la hora de settear los eventos
 * elementoJQuery.click(()=>{})
 */

$("#btnClick").click((e) => {
  console.log(e);
  console.log("click en el btnClick! =) ");
});

$("#btnTextoRojo").click((e) => {
  /// elemento.addClass = agrega una clase al/a los elemento(S)
  // seleccionados
  $(".parrafo").addClass("texto-rojo");
});

$("#btnCssTitle").click((e) => {
  // elemento.css("propiedad","valor")
  $("#title").css("font-family", "Helvetica").css("color", "#ff3542");
});

$("#formulario").submit((e) => {
  e.preventDefault();
  // obtener el value de un input
  console.log($("#inputEmail").val());
});

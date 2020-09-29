/**
 * window
 * window es un objeto que está creado
 * automáticamente en el navegador
 *
 * En él se encuentran todas las funciones y propiedades para
 * manipular al DOM, y demás características del navegador
 */

/**
 * Propiedades
 *
 * window.document => propiedad que manipula al DOM
 * window.innerWidth => retorna el ancho de la ventana en pixeles
 * window.innerHeight => retorna el alto de la ventana en pixeles
 */

const ancho = window.innerWidth;
const alto = window.innerHeight;

console.log(`Ancho: ${ancho}`);
console.log(`Alto: ${alto}`);

/**
 * OJO, pueden usarse propiedades del objeto window
 * sin mencionar a dicho objeto. Por ejemplo
 * En lugar de colocar window.innerWidth se puede usar innerWidth
 *
 * OJO, en NodeJS no existe el objeto WINDOW (¿?, porque no tenemos un navegador )
 *    , además NodeJS es backend
 */


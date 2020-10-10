/**
 * Formas modernas y reducidas de retornar valores en
 * funciones
 */

// Forma tradicional de hacer un retorno
const sumar = (a, b) => {
  return a + b;
};

console.log(sumar(50, 19));

// Forma reducida
// Aclaración, si la función tiene una sola linea de desarrollo
// el retorno es implícito si lo colocamos entre paréntesis ()
const sumarReducido = (a, b) => a + b;
console.log(sumarReducido(40, 20));

// FORMA REDUCIDA DE HACER FILTER
let nombres = [
  "jorge",
  "juan",
  "mariel",
  "jeremias",
  "vladimir",
  "jesus de ley",
];
// filtar todos los nombres que inicien con una letra "j";
// Forma tradicional
let filtroTradicional = nombres.filter((n) => {
  if (n.charAt(0) === "j") {
    return n;
  }
});
console.log(filtroTradicional);

// Forma reducida
let filtroReducido = nombres.filter((n) => n.charAt(0) === "j");
console.log(filtroReducido);

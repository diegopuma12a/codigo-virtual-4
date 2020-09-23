/**
 * Leer tantos números como el usuario decida
 * en cada iteración, al final mostrar la sumatoria
 * (el usuario debe ingresar "s" en caso de que quiera
 * ingresar un siguiente número y "n" cuando el usuario
 * ya no desee ingresar más números)
 */

let rpta = "s";
let sumatoria = 0;

while (rpta === "s") {
  let nro = +prompt("Ingrese un número");
  sumatoria = sumatoria + nro;
  rpta = prompt("¿Desea seguir ingresando números? Sí(s),No(n)");
  while (rpta !== "s" && rpta !== "n") {
    rpta = prompt("Error! ingrese una respuesta válida, Sí(s),No(n)");
  }
}

console.log(`Sumatoria total ${sumatoria}`);

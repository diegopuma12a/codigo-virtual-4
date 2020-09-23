/**
 * Hacer un algoritmo para
 * calcular el factorial de un número
 * /// ¿Cómo es?
 * Ejm: Factorial de 5 = 5 x 4 x 3 x 2 x 1 = 120
 * Ejm: Factorial de 4 = 4 x 3 x 2 x 1 = 24
 */

let productoTotal = 1;
const nro = 8;

for (let c = nro; c > 0; c--) {
  productoTotal = productoTotal * c;
}

console.log(`Rpta ${productoTotal}`);

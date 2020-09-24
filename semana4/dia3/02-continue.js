/**
 * La sentencia "continue" interrumpe la iteración
 * que se encuentra desarrollando una estructura repetitiva,
 * sin embargo, hace que se continúe con la siguiente iteración
 */

/**
 * Algoritmo que imprime los números diferentes de 0 */

const edades = [20, 12, 2, 0, 58, 25, 95, 3];
for (let c = 0; c < edades.length; c++) {
  if (edades[c] === 0) {
    continue;
  }
  console.log(edades[c]);
}

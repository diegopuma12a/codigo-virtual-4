/**
 * map
 */

/**
 * map es una función propia de los arreglos
 * y el comportamiento es muy similar a la función filter
 * sin embargo, en lafunción map, se retornan siempre, todos
 * los elementos del arreglo porque su objetivo principal es armar
 * un nuevo arreglo con algunos o todos los elementos modificados
 */
const numeros = [12, -3, 0, -9, 67, 0, -10, 0, -500, -4, 32, 33];

let respuesta = numeros.map((elemento, i) => {
  if (elemento > 0) {
    return elemento * 2;
  }
  return elemento;
});

console.log(respuesta);

/**
 * filter
 */
/**
 * filter es una función propia de los arreglos,
 * recibe un callback con los mismos parametros
 * que la función forEach
 * La diferencia es que filter retorna un nuevo arreglo
 * con los elementos filtrados
 */

const numeros = [12, -3, 0, -9, 67, 0, -10, 0, -500, -4, 32, 33];

let resultado = numeros.filter((elemento) => {
  if (elemento < 0) {
    return elemento;
  }
});

console.log(resultado);

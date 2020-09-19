/**
 * operadores aritmeticos
 */

/**
 * suma = +
 * resta = -
 * multiplicación = *
 * división = cociente de una división = /
 * módulo = residuo de una división = %
 * potencia = **
 */

let a = 60;
let b = 20;
let division = a / b;
let modulo = a % b;

console.log(`división ${a} / ${b} = ${division}`);
console.log(`módulo ${a} % ${b} = ${modulo}`);

/**
 * Operadores adicionales
 *
 * incremento =  " += "
 * decremento =  " -= "
 * incremento en una unidad = " ++ "
 * decremento en una unidad = " -- "
 */

/**
 * El debugger crea un punto de interrupción en la ejecución
 * de un programa permitiéndonos ir paso por paso hasta
 * el fin del mismo.
 */
// debugger;

let numero = 50;
let numero2 = 100;
// numero = numero + numero2   =>  numero += numero2
numero += numero2;
// numero *= numero2   => numero = numero * numero2
console.log(numero);

numero2++;

console.log(numero2);

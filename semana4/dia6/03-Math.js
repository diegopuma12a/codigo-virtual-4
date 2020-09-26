/**
 * La clase Math nos ayuda a trabajar con funciones matemáticas
 */

/**
 * Para usar la clase math y sus métodos
 * no se necesita crear un objeto
 */

/**
 * Math.random()
 * retorna un número aleatorio entre 0 y 1
 */
let aleatorio = Math.random();
console.log(aleatorio);

/**
 * Retornar un número aleatorio entre min y max
 * Math.random() * (max - min) + min;
 */
let aleatorioEntre50y100 = Math.random() * (100 - 50) + 50;
console.log(aleatorioEntre50y100);

/**
 * Obtener el piso de un número
 * es obtener la parte entera proxima inferior de un número decimal
 * Ejemplo:
 * 16.99 = 16
 * 5.85 = 5
 * Math.floor(numero)
 */
console.log(Math.floor(5.98));

/**
 * Obtener el techo de un número decimal
 * Math.ceil(numero_decimal)
 */

console.log(Math.ceil(52.01));

/**
 * Redondear un número de forma clásica
 * Math.round(numero_decimal)
 */

console.log(Math.round(52.3));

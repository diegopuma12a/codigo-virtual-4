/**
 * Funciones de flecha
 */

// const tablaDeMultiplicar = function (numero) {
//   for (let c = 0; c <= 10; c++) {
//     console.log(`${c} x ${numero} = ${c * numero}`);
//   }
// };

// una función de flecha es una función anónima
// sólo que está escrito en sintaxis moderna de JavaScript

const tablaDeMultiplicar = (numero) => {
  for (let c = 0; c <= 10; c++) {
    console.log(`${c} x ${numero} = ${c * numero}`);
  }
};

tablaDeMultiplicar(17);

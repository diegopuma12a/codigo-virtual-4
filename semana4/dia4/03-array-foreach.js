/**
 * forEach
 */

// forEach es una función propia de los arreglos
// y sirve para recorrer un arreglo sin necesidad
// de usar un ciclo for

const nombres = ["Juliana", "Carlos", "Mónica", "Abel", "Pepillo"];

/**
 * forEach recibe una función anónima la cual ejecutará
 * tantas veces como elementos tenga mi arreglo
 * Puede recibir los siguientes parámetros
 * (elemento, iterador, arreglo)=>{}
 */
nombres.forEach((elemento, c) => {
  console.log(`Elemento ${elemento}, C =${c}`);
});

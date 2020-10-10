/**
 * Destructuración de Arreglos
 * Una manera directa de obtener acceso a las posiciones y
 * elementos de los arreglos
 */

let nombres = ["Jorgito", "Carmencita", "Pepito", "Carlita", "Luisito"];

let [primero, segundo, , , ultimo] = nombres;

console.log(primero);

console.log(segundo);

console.log(ultimo);

// Ejemplo
/**
 * Función que retorna un arreglo de dos elementos [lat,lng]
 * dado el nombre de una ciudad a buscar
 * @param {*} ciudad
 */
const getCoordsByCiudad = (ciudad) => {
  // OJO es una función FAKE!!!
  console.log("buscando......");
  return [-16.4141, -70.43516];
};

let [latitud, longitud] = getCoordsByCiudad("Puno");
console.log(latitud);
console.log(longitud);

// el operador rest(...), devuelve un arreglo de todos los
// elementos de un arreglo
// En el ejemplo, será un arreglo de todos los elementos
// menos el primer elemento

// OJO el operador rest(...) sólo puede ser el último elemento
// destructurador
let [nombre1, ...resto] = nombres;

console.log(nombre1);
console.log(resto);

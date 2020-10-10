const buscarPorDniProblema = (dni) => {
  let respuesta = {};

  setTimeout(() => {
    respuesta = {
      nombre: "Jorge Garnica Blanco",
      fechaNac: "08-09-1991",
    };
  }, 2000);
  return respuesta;
};
/**
 * la variable resultado siempre será un objeto vacío {}
 * dado que la función buscarPorDniProblema, espera 2 segundos en settear
 * dicha variable.
 * Pero por asincronía, el retorno de la variable respuesta, es inmediato
 */
let resutlado = buscarPorDniProblema("47548520");
console.log(resutlado);
//---------------------------------------------------------------------
// Posible solución a la asincronía
// enviar un callback para recibir en él, el resultado de la búsqueda
const buscarPorDni = (dni, callback) => {
  let respuesta = {};

  setTimeout(() => {
    respuesta = {
      nombre: "Jorge Garnica Blanco",
      fechaNac: "08-09-1991",
    };
    callback(respuesta);
  }, 2000);
};

buscarPorDni("47548520", (res) => {
  console.log(res);
});

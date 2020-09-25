/**
 * Callbacks
 */

const nombres = ["jorge", "luis", "ximena"];
const dnis = ["20202020", "12345678", "01020304"];

const buscarPorDNI = (dni, funcion) => {
  for (let c = 0; c < dnis.length; c++) {
    if (dnis[c] === dni) {
      funcion(nombres[c]);
    }
  }
};

buscarPorDNI("12345678", (encontrado) => {
  console.log("llegó el resultado!");
  console.log(encontrado);
});

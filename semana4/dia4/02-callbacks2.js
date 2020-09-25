/**
 * Callbacks
 */

const nombres = ["jorge", "luis", "ximena"];
const dnis = ["20202020", "12345678", "01020304"];

const buscarPorDNI = (dni, funcion) => {
  for (let c = 0; c < dnis.length; c++) {
    if (dnis[c] === dni) {
      funcion(nombres[c]);
      return;
    }
  }
  funcion(null);
};

buscarPorDNI("12345678", (rpta) => {
  if (rpta !== null) {
    console.log(`Encontrado: ${rpta}`);
  } else {
    console.log(`No existen coincidencias 😥`);
  }
});

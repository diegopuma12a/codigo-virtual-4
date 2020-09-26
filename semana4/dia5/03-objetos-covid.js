/**
 * Función para recibir el nombre de un país introducido
 * por el usario y mostrar:
 * total de casos
 * total de recuperados
 * total de fallecidos 😥
 */

const mostrarDataPorPais = (pais) => {
  for (let c = 0; c < covid.length; c++) {
    if (covid[c].country === pais) {
      // console.log(covid[c]);
      let encontrado = {
        nombrePais: covid[c].country,
        totalCasos: covid[c].cases,
        totalRecuperados: covid[c].recovered,
        totalFallecidos: covid[c].deaths,
      };
      console.log(encontrado);
      return;
    }
  }
};
mostrarDataPorPais("Brazil");

// la misma función de arriba, con find()
const mostrarDataPorPaisV2 = (pais) => {
  const paisEncontrado = covid.find((estadistica) => {
    if (estadistica.country === pais) {
      return estadistica;
    }
  });
  let encontrado = {
    nombrePais: paisEncontrado.country,
    totalCasos: paisEncontrado.cases,
    totalRecuperados: paisEncontrado.recovered,
    totalFallecidos: paisEncontrado.deaths,
  };

  console.log(encontrado);
};
mostrarDataPorPaisV2("Peru");

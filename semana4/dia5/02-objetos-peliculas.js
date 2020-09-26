/**
 * Función para crear un segundo arreglo de peliculas
 * que contenga sólamente el título, la fecha de lanzamiento
 * y la sinopsis.
 * Al final, imprimir el arreglo
 */

const peliculasResumen = () => {
  const resumenes = peliculas.map((pelicula) => {
    const objetoTemporal = {
      titulo: pelicula.title,
      estreno: pelicula.release_date,
      sinopsis: pelicula.overview,
    };

    return objetoTemporal;
  });
  console.log(resumenes);
};

peliculasResumen();

/**
 * Función para filtrar y mostrar en un nuevo arreglo
 * todas las peliculas en idioma español (castellano)
 */

const peliculasLatinas = () => {
  const pelisFiltradas = peliculas.filter((pelicula) => {
    if (pelicula.original_language === "es") {
      return pelicula;
    }
  });
  console.log(pelisFiltradas);
};

peliculasLatinas();

/**
 * Función que retorne un género dado el id del genero
 */

const searchGenreById = (id) => {
  /**
   * arreglo.find(()=>{})
   * la función find, retorna el primer elemento que coincida con la condicion o el patrón de
   * búsqueda (hablamos del if), * Si hubiera más de una coincidencia, de todas formas
   * la función find, sólo retorna la primera coincidencia
   * * Si no existen coincidencias, se retorna "undefined"
   */

  const generoEncontrado = generos.find((genero) => {
    if (genero.id === id) {
      return genero;
    }
  });
  // si el genero encontrado existe, será diferente de undefined
  if (generoEncontrado) {
    return generoEncontrado.name;
  } else {
    return null;
  }
};

console.log(searchGenreById(12));

/**
 * Función que imprime un nuevo arreglo de peliculas, donde cada pelicula tendrá
 * {
 *  titulo:""
 *  sinopsis:""
 *  estreno:""
 *  generos:["","",""]
 * }
 * HINT: usar la función searchGenreById();
 */

const resumenPeliculasConGeneros = () => {
  const peliculasResumen = peliculas.map((peli) => {
    // crear un arreglo de generos de acuerdo
    // a la pelicula en la que me encuentre iterando
    const generosStrings = peli.genre_ids.map((idDelGenero) => {
      let nombre = searchGenreById(idDelGenero);
      return nombre;
    });
    let objPeliResumen = {
      titulo: peli.title,
      sinopsis: peli.overview,
      estreno: peli.release_date,
      generos: generosStrings,
    };
    return objPeliResumen;
  });
  console.log(peliculasResumen);
};

resumenPeliculasConGeneros();

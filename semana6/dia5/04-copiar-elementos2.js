/**
 * Copiando objetos
 */

let pelicula = {
  popularity: 1578.677,
  vote_count: 1691,
  video: false,
  poster_path: "/8STWO9pUTqubPV04iXZ2R6SClME.jpg",
  id: 497582,
  adult: false,
  backdrop_path: "/kMe4TKMDNXTKptQPAdOF0oZHq3V.jpg",
  original_language: "en",
  original_title: "Enola Holmes",
  genre_ids: [80, 18, 9648],
  title: "Enola Holmes",
  vote_average: 7.7,
  overview:
    "Enola Holmes, una intrépida joven que busca a su madre, utiliza su brillante instinto investigador para superar a su hermano Sherlock y ayudar a un lord en su fuga.",
  release_date: "2020-09-23",
  pais: {
    lugar: "Estados Unidos",
    lat: -12.15321,
    lng: -54.353,
  },
};

// Forma correcta de copiar un objeto en otra variable

// También existe un operador rest(...) para los objetos

let nuevaPelicula = { ...pelicula };
console.log(pelicula);
console.log(nuevaPelicula);

// EJEMPLO

const modificarTitulo = (objetoPelicula, nuevoTitulo) => {
  // Estamos retornando una copia de todas las propiedades
  // del objeto pelicula, sin embargo, estmoas reemplazando
  // el valor de la propiedad "title"
  return {
    ...objetoPelicula,
    title: nuevoTitulo,
  };
};

let resultado = modificarTitulo(pelicula, "Enola Nuevo");
console.log(resultado);

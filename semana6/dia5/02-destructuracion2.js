/**
 * Destructuración de Objetos
 */

let mascota = {
  nombre: "Kyra",
  raza: "Bull Terrier",
  edad: 1,
};

// obligatorio colocar el mismo nombre de la propiedad a la
// variable que destructura
let { edad, nombre } = mascota;

console.log(nombre);
console.log(edad);

// destructurar un atributo modificando el nombre de la nueva
// variable

let { raza: familia } = mascota;
// console.log(raza); // error, no existe la variable raza, sólo "familia"
console.log(familia);

// EJEMPLO
// dado un objeto de tipo pelicula(estructura THE MOVIE DB)

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

const imprimirSinopsis = ({ overview, title }) => {
  // la función recibe el "overview" destructurado del
  // objet de tipo pelicula
  // VENTAJA: uso directamente la variable "overview"
  // DESVENTAJA: pierdo el acceso a los demás atributos
  console.log(overview);
  console.log(title);
};

imprimirSinopsis(pelicula);

// ejemplo:
// destructurar pais y la longitud con una nueva variable de nombre "nuevaLongitud"
let {
  pais,
  pais: { lng: nuevaLongitud },
} = pelicula;
console.log("longitud");
console.log(nuevaLongitud);
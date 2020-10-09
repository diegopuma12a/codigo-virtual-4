const miCarrusel = document.getElementById("miCarrusel");
const modalImg = document.getElementById("modalImg");
const modalTitulo = document.getElementById("modalTitulo");
const modalSinopsis = document.getElementById("modalSinopsis");

const recortarSinopsis = (sinopsis) => {
  const arreglo = sinopsis.split(" ");
  let texto = "";

  arreglo.forEach((palabra, i) => {
    if (i > 10) {
      return;
    }
    texto = texto + " " + palabra;
  });

  texto += " <a href='#'>Leer mas...</a>";

  return texto;
};

const dibujarPeliculas = () => {
  peliculas.forEach((peli) => {
    const cardPeli = document.createElement("div");
    cardPeli.setAttribute("peli-id", peli.id);
    cardPeli.classList.add("card", "carousel-cell");
    cardPeli.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${
      peli.poster_path
    }" alt="" class="card-img-top" />
                          <div class="card-body">
                            <h5 class="card-title">${peli.title}</h5>
                            <p class="card-text">${recortarSinopsis(
                              peli.overview
                            )}</p>
                          </div>`;
    miCarrusel.appendChild(cardPeli);
  });
};
dibujarPeliculas();

const getPeliculaById = (id) => {
  // buscar la pelicula que tenga el id que recibo por parametros
  const pelicula = peliculas.find((peli) => {
    if (peli.id === id) {
      return peli;
    }
  });
  return pelicula;
};

const flkty = new Flickity(miCarrusel, {
  cellAlign: "left",
  contain: true,
});

flkty.on("staticClick", (event, pointer, cellElement, cellIndex) => {
  const id = +cellElement.getAttribute("peli-id");
  const pelicula = getPeliculaById(id);
  //settear los campos del modal una vez encontrada la pelicula en la que se hizo click
  modalImg.src = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path;
  modalSinopsis.innerText = pelicula.overview;
  modalTitulo.innerText = pelicula.title;
  // abrir el modal
  $("#modalPelicula").modal("show");
});

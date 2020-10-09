const miCarrusel = document.getElementById("miCarrusel");

const dibujarPeliculas = () => {
  peliculas.forEach((peli) => {
    const cardPeli = document.createElement("div");
    cardPeli.classList.add("card", "carousel-cell");
    cardPeli.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="" class="card-img-top" />
                          <div class="card-body">
                            <h5 class="card-title">${peli.title}</h5>
                            <p class="card-text">${peli.overview}</p>
                          </div>`;
    miCarrusel.appendChild(cardPeli);
  });
};
dibujarPeliculas();

const flkty = new Flickity(miCarrusel, {
  cellAlign: "left",
  contain: true,
});

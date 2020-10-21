import { URL_BACKEND } from "./variables.js";

const traerPokemon = async (elemento, url) => {
  const peticion = await fetch(url);
  const dataPokemon = await peticion.json();
  let objPokemon = {
    nombre: dataPokemon.name,
    foto: dataPokemon.sprites.other["official-artwork"].front_default,
    peso: (dataPokemon.weight / 10).toFixed(1),
    talla: (dataPokemon.height / 10).toFixed(1),
    // foto:
    //   dataPokemon["sprites"]["other"]["official-artwork"]["fonrt_default"],
  };

  elemento.innerHTML = `<div class="col-md-6 p-5">
  <div class="card border-0 shadow">
    <div class="altura shadow">${objPokemon.talla}m</div>
    <div class="peso shadow">${objPokemon.peso}kg</div>
    <div class="card-body text-center">
      <figure>
        <img src="${objPokemon.foto}" alt=""/>
      </figure>
      <h3 class="card-title my-0">${objPokemon.nombre}</h3>
      <p class="card-text my-0">Tipo de Pokemón</p>
      <p class="card-text my-0">TIPO</p>
      <p class="card-text my-0">Característica</p>
    </div>
  </div>
</div>
<div class="col-md-6">
  <div class="row align-items-center" style="height: 100%">
    <div class="col-12">
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <div class="col-12">
      <div class="progress">
        <div
          class="progress-bar bg-warning"
          role="progressbar"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <div class="col-12">
      <div class="progress">
        <div
          class="progress-bar bg-primary"
          role="progressbar"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <div class="col-12">
      <div class="progress">
        <div
          class="progress-bar bg-dark"
          role="progressbar"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</div>`;
  const row = document.getElementById(url);
  io.unobserve(row);
};

let io = new IntersectionObserver(
  (entries) => {
    entries.forEach(({ target, intersectionRatio }) => {
      console.log(intersectionRatio);
      if (intersectionRatio > 0) {
        let url = target.getAttribute("url");
        traerPokemon(target, url);
      }
    });
  },
  {
    // threshold: [1],
  }
);

const tipos = document.getElementById("tipos");
const filas = document.getElementById("filas");

/**
 *
 * @param {*} pokemones
 */
const dibujarPokemones = (pokemones) => {
  filas.innerHTML = "";

  pokemones.forEach((objPokemon) => {
    let row = document.createElement("div");
    row.classList.add("row");
    row.innerHTML = `<div class="col-md-6 p-5">
    <div class="card border-0 shadow">
      <div class="altura shadow">${objPokemon.talla}m</div>
      <div class="peso shadow">${objPokemon.peso}kg</div>
      <div class="card-body text-center">
        <figure>
          <img src="${objPokemon.foto}" alt=""/>
        </figure>
        <h3 class="card-title my-0">${objPokemon.nombre}</h3>
        <p class="card-text my-0">Tipo de Pokemón</p>
        <p class="card-text my-0">TIPO</p>
        <p class="card-text my-0">Característica</p>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="row align-items-center" style="height: 100%">
      <div class="col-12">
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="col-12">
        <div class="progress">
          <div
            class="progress-bar bg-warning"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="col-12">
        <div class="progress">
          <div
            class="progress-bar bg-primary"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="col-12">
        <div class="progress">
          <div
            class="progress-bar bg-dark"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </div>`;
    filas.appendChild(row);
  });
};

// const clickRow = async ({ url }, elemento) => {
//   console.log(pokemon);
//   console.log(elemento);
//   const peticion = await fetch(url);
//   const data = await peticion.json();
//   console.log(data);
// };

const dibujarRows = ({ pokemon: pokemones }) => {
  pokemones.forEach((p) => {
    let row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("url", p.pokemon.url);
    row.id = p.pokemon.url;
    row.innerHTML = `<div class="col-md-6 p-5">
    <div class="card border-0 shadow">
      <div class="altura shadow">Cargando...</div>
      <div class="peso shadow">?kg</div>
      <div class="card-body text-center">
        <figure>
          <img src="http://placehold.it/200X200?text=cargando..." alt=""/>
        </figure>
        <h3 class="card-title my-0">Cargando...</h3>
        <p class="card-text my-0">Tipo de Pokemón</p>
        <p class="card-text my-0">TIPO</p>
        <p class="card-text my-0">Característica</p>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="row align-items-center" style="height: 100%">
      <div class="col-12">
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="col-12">
        <div class="progress">
          <div
            class="progress-bar bg-warning"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="col-12">
        <div class="progress">
          <div
            class="progress-bar bg-primary"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="col-12">
        <div class="progress">
          <div
            class="progress-bar bg-dark"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </div>`;
    filas.appendChild(row);
    io.observe(row);
  });
};

const getPokemones = (urlType) => {
  fetch(urlType).then((peticion) => {
    peticion.json().then((data) => {
      dibujarRows(data);
    });
  });
};

const dibujarTipos = ({ results }) => {
  results.forEach((objTipo) => {
    let div = document.createElement("div");
    div.classList.add("tipos__tipo", "text-center", "mb-2", "px-3", "py-3");
    div.innerText = objTipo.name;
    div.onclick = () => {
      getPokemones(objTipo.url);
    };
    tipos.appendChild(div);
  });
};

const getTypes = async () => {
  const peticion = await fetch(`${URL_BACKEND}/type`);
  const data = await peticion.json();
  dibujarTipos(data);
};

getTypes();

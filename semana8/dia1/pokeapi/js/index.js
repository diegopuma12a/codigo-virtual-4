import { URL_BACKEND } from "./variables.js";

const tipos = document.getElementById("tipos");
const filas = document.getElementById("filas");

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

const getPokemones = async (urlType) => {
  const peticion = await fetch(urlType);
  const data = await peticion.json();
  let pokemones = [...data.pokemon];
  let pokemonesArray = [];
  for (let i = 0; i < pokemones.length; i++) {
    const peticion2 = await fetch(pokemones[i].pokemon.url);
    const dataPokemon = await peticion2.json();
    pokemonesArray.push({
      nombre: dataPokemon.name,
      foto: dataPokemon.sprites.other["official-artwork"].front_default,
      peso: (dataPokemon.weight / 10).toFixed(1),
      talla: (dataPokemon.height / 10).toFixed(1),
      // foto:
      //   dataPokemon["sprites"]["other"]["official-artwork"]["fonrt_default"],
    });
  }
  dibujarPokemones(pokemonesArray);
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

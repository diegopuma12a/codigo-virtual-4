import React, { useEffect, useState } from 'react'

const Pokemon = ({ pokemon: { name, url } }) => {

  const [pokemonData, setPokemonData] = useState({});
  const [cargando, setCargando] = useState(true);

  const traerPokemon = async () => {
    const peticion = await fetch(url);
    const data = await peticion.json();
    setPokemonData(data);
    setCargando(false);
  }

  useEffect(() => {
    traerPokemon();
  }, [url])

  if (cargando) {
    return (
      <div className="row text-center">
        <h3>Cargando...</h3>
      </div>
    )
  } else {
    return (
      <div className="row">
        <div className="col-md-6 p-5">
          <div className="card border-0 shadow">
            <div className="altura shadow">{pokemonData.height}m</div>
            <div className="peso shadow">{pokemonData.weight}kg</div>
            <div className="card-body text-center">
              <figure>
                <img
                  src={pokemonData.sprites.other["official-artwork"].front_default}
                  alt=""
                />
              </figure>
              <h3 className="card-title my-0">{pokemonData.name}</h3>
              <p className="card-text my-0">Tipo de Pokemón</p>
              <p className="card-text my-0">TIPO</p>
              <p className="card-text my-0">Característica</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row align-items-center" style={{ height: "100%" }}>
            <div className="col-12">
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-12">
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-12">
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-12">
              <div className="progress">
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Pokemon

import React, { useEffect, useRef, useState } from 'react'
import Cargando from './Cargando';

const Pokemon = ({ pokemon: { name, url } }) => {

  const [pokemonData, setPokemonData] = useState({});
  const [cargando, setCargando] = useState(true);
  const [hp, setHp] = useState(0);
  const [ataque, setAtaque] = useState(0);
  const [defensa, setDefensa] = useState(0);


  const traerPokemon = async () => {
    const peticion = await fetch(url);
    const data = await peticion.json();
    setPokemonData(data);

    setTimeout(() => {
      setHp(data.stats[0].base_stat);
      setAtaque(data.stats[1].base_stat);
      setDefensa(data.stats[2].base_stat);
    }, 500);

    setCargando(false);
  }

  useEffect(() => {
    traerPokemon();
  }, [url])

  return (

    cargando === true ? <Cargando /> :
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
              <h6>Horse Power (Caballos de fuerza):</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: hp + "%" }}
                  aria-valuenow={hp}
                  aria-valuemin="0"
                  aria-valuemax="100"
                > {hp}% </div>
              </div>
            </div>
            <div className="col-12">
              <h6>Ataque:</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: ataque + "%" }}
                  aria-valuenow={ataque}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >{ataque}%</div>
              </div>
            </div>
            <div className="col-12">
              <h6>Defensa:</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: defensa + "%" }}
                  aria-valuenow={defensa}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >{defensa}%</div>
              </div>
            </div>
          </div>
        </div>
      </div >
  )

}

export default Pokemon

import React from 'react'
import Pokemon from './Pokemon'

const Pokemones = ({ pokemones }) => {
 
  console.log("Mostrando componente POKEMONES");
  console.log(pokemones);
  return (
    <section className="col-md-10 filas">
      {
        pokemones.map((pokemon) => {
          return <Pokemon key={pokemon.name} pokemon={pokemon} />
        })
      }
    </section>
  )
}

export default Pokemones

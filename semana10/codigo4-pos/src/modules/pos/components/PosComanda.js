import React from 'react'
import PosComandaItem from './PosComandaItem'

const PosComanda = () => {
  return (
    <div className="comanda">
      <h4 className="comanda__mesa">Mesa 01</h4>
      <p className="comanda__usuario">Carlos Jimenez</p>
      <hr />

      <ul className="comanda__lista">
        <PosComandaItem />
        <PosComandaItem />
        <PosComandaItem />
      </ul>
      <button className="boton boton-success boton-block">PAGAR</button>
    </div>
  )
}

export default PosComanda

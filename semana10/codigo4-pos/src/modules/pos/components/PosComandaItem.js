import React from 'react'

const PosComandaItem = ({ plato }) => {
  return (
    <li className="comanda__item">
      <p className="comanda__nombre">
        <span><strong>{plato.plato_nom}</strong></span>
        <span>Precio: S/ {plato.plato_pre}</span>
      </p>
      <p className="comanda__cantidad">{plato.plato_cant}</p>
      <p className="comanda__precio">
        <strong>S/ {+plato.plato_cant * +plato.plato_pre}</strong>
      </p>
    </li>
  )
}

export default PosComandaItem

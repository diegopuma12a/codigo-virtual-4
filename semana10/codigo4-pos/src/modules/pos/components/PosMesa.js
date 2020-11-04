import React from 'react'

const PosMesa = ({ objMesa }) => {
  return (
    <li className="mesas__mesa">
      <span className="mesas__titulo">Mesa</span>
      <span className="mesas__numero">{objMesa.mesa_nro}</span>
    </li>
  )
}

export default PosMesa

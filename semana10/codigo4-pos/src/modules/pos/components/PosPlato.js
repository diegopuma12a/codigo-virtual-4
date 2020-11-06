import React, { useContext } from 'react'
import MesaContext from '../context/mesa/mesaContext';

const PosPlato = ({ objPlato }) => {

  const { agregarPlato, restarPlato } = useContext(MesaContext);

  return (
    <div className="carta__plato">
      <img src={objPlato.plato_img} alt="imagen del plato" />
      <h4 className="carta__titulo">{objPlato.plato_nom}</h4>
      <span className="carta__precio">S/ {objPlato.plato_pre}</span>
      <div className="carta__botones">
        <button className="boton boton-outline-primary boton-restar"
          onClick={() => {
            restarPlato({ ...objPlato });
          }}>
          -1
        </button>
        <button className="boton boton-outline-primary boton-sumar"
          onClick={() => {
            agregarPlato({ ...objPlato });
          }}
        >+1</button>
      </div>
    </div>
  )
}

export default PosPlato

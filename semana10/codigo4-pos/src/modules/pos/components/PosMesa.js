import React, { useContext } from 'react'
import MesaContext from '../context/mesa/mesaContext';

const PosMesa = ({ objMesa }) => {

  const { globalObjMesa, seleccionarMesaGlobal } = useContext(MesaContext);

  ////// alternativa para colocar la clase "activo"

  let clase = "";
  if (globalObjMesa?.mesa_id === objMesa.mesa_id) {
    clase = "activo";
  }

  return (
    <li className={`mesas__mesa ${clase}`} onClick={() => {
      seleccionarMesaGlobal({ ...objMesa });
    }}>
      <span className="mesas__titulo">Mesa</span>
      <span className="mesas__numero">{objMesa.mesa_nro}</span>
    </li>
  )
}

export default PosMesa

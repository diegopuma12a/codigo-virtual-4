import React, { useEffect, useState } from 'react'
import { getMesas } from '../../../services/mesasService';
import PosMesa from './PosMesa'

const PosMesas = () => {

  const [mesas, setMesas] = useState([]);
  const [cargando, setCargando] = useState(true);

  const traerMesas = async () => {
    const rpta = await getMesas();
    if (rpta.ok) {
      setMesas(rpta.content);
      setCargando(false);
    }
  }

  useEffect(() => {
    traerMesas();
  }, []);

  return (
    <div className="mesas">
      <ul className="mesas__lista">
        {
          cargando === true ? <span>cargando...</span> :
            mesas.map(objMesa => (
              <PosMesa key={objMesa.mesa_id} objMesa={objMesa} />
            ))
        }
      </ul>
      <div className="mesas__info"></div>
    </div>
  )
}

export default PosMesas

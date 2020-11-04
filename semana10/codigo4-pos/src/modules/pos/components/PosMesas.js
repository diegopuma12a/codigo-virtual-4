import React, { useEffect, useState } from 'react'
import { getMesas } from '../../../services/mesasService';
import PosMesa from './PosMesa'

const PosMesas = () => {

  const [mesas, setMesas] = useState([]);
  const [cargando, setCargando] = useState(true);

  const traerMesas = async () => {
    const rpta = await getMesas();
    console.log(rpta);
  }

  useEffect(() => {
    traerMesas();
  }, []);

  return (
    <div className="mesas">
      <ul className="mesas__lista">
        <PosMesa />
        <PosMesa />
        <PosMesa />
        <PosMesa />
        <PosMesa />
        <PosMesa />
      </ul>
      <div className="mesas__info"></div>
    </div>
  )
}

export default PosMesas

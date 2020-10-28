import React, { useEffect, useState } from 'react'
import MascotasForm from "./MascotasForm";
import MascotasTabla from './MascotasTabla';
import { getMascotas } from './services/mascota';
const Mascotas = () => {

  const [mascotas, setMascotas] = useState([]);

  const traerMascotas = async () => {
    const data = await getMascotas();
    setMascotas(data);
  }
  useEffect(() => {
    traerMascotas();
  }, []);

  return (
    <>
      <MascotasForm />
      <MascotasTabla mascotas={mascotas} />
    </>
  )
}

export default Mascotas

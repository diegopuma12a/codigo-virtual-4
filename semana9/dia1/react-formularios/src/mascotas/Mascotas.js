import React, { useEffect, useState } from 'react'
import MascotasForm from "./MascotasForm";
import MascotasTabla from './MascotasTabla';
import { getMascotas } from './services/mascota';
const Mascotas = () => {

  const [mascotas, setMascotas] = useState([]);
  const [mascotaEditar, setMascotaEditar] = useState(null);

  const traerMascotas = async () => {
    const data = await getMascotas();
    setMascotas(data);
  }
  useEffect(() => {
    traerMascotas();
  }, []);

  return (
    <>
      <MascotasForm traerMascotas={traerMascotas}
                    mascotaEditar={mascotaEditar} />
      <MascotasTabla mascotas={mascotas}
                      traerMascotas={traerMascotas}
                      setMascotaEditar={setMascotaEditar} />
    </>
  )
}

export default Mascotas

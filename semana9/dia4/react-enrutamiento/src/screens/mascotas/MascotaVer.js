import React from 'react'
import { getMascotaById } from '../../services/mascotas'

const MascotaVer = (props) => {

  const { mascota_id } = props.match.params

  const traerMascotaPorId = async () => {
    let data = await getMascotaById(mascota_id);
    console.log(data);
  }

  traerMascotaPorId();


  return (
    <div>
      VIENDO LA INFORMACIÓN DE LA MASCOTA: <strong>{mascota_id}</strong>
    </div>
  )
}

export default MascotaVer

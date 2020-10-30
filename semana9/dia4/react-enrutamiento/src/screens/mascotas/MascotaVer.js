import React from 'react'

const MascotaVer = (props) => {


  const { mascota_id } = props.match.params

  return (
    <div>
      VIENDO LA INFORMACIÓN DE LA MASCOTA: <strong>{mascota_id}</strong>
    </div>
  )
}

export default MascotaVer

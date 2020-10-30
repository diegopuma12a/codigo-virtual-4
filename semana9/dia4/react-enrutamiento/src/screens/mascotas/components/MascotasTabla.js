import React, { useEffect, useState } from 'react'
import { getMascotas } from '../../../services/mascotas';

const MascotasTabla = () => {

  const [mascotas, setMascotas] = useState([]);

  const traerMascotas = async () => {
    getMascotas().then((data) => {
      setMascotas(data);
    });
  }

  useEffect(() => {
    traerMascotas();
  }, [])

  return (
    <div className="row mt-4">
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered text-center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Colores</th>
              <th>Activo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              mascotas.map(m => (
                <tr key={m.mascota_id}>
                  <td>{m.mascota_id}</td>
                  <td>{m.mascota_nombre}</td>
                  <td>{m.mascota_colores}</td>
                  <td>{m.mascota_activo.toString()}</td>
                  <td>
                    <button className="btn btn-secondary btn-block">
                      Ver Detalles
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MascotasTabla

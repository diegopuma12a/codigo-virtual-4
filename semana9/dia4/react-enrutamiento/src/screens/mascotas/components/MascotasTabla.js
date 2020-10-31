import React, { useEffect, useState } from 'react'
import { getMascotas } from '../../../services/mascotas';

import { withRouter } from "react-router-dom";
// La función withRouter es usada para obtener las propiedades de enrutamiento
// (params, history, location, etc...) en un componente que NO haya sido 
// renderizado directamente por el componente <Route></Route>

const MascotasTabla = (props) => {

  const [mascotas, setMascotas] = useState([]);

  const traerMascotas = async () => {
    getMascotas().then((data) => {
      setMascotas(data);
    });
  }

  const goToMascotasVer = (mascota_id) => {
    // NOTA: No confundir la función push() de los arreglos, con la función
    // push del objeto "history", ésta última es para dedireccioanrnos de ruta
    // programáticamente
    props.history.push(`/mascotas/${mascota_id}`);
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
                    <button className="btn btn-secondary btn-block"
                      onClick={() => {
                        goToMascotasVer(m.mascota_id);
                      }}>
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

// Cuando usamos la función withRouter como envoltura de un componente
// el componente recibirá en sus props, todos los objetos de enrutamiento
export default withRouter(MascotasTabla)

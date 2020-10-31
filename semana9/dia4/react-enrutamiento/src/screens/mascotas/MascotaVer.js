import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Cargando from '../../components/Cargando'
import { getMascotaById } from '../../services/mascotas'
import Swal from "sweetalert2";
const MascotaVer = (props) => {

  const { mascota_id } = props.match.params

  const [objMascota, setObjMascota] = useState({});
  const [cargando, setCargando] = useState(true);

  const traerMascotaPorId = async () => {
    let data = await getMascotaById(mascota_id);
    if (data !== null) {
      setObjMascota(data);
      setCargando(false);
    } else {
      // redireccionando a la página de la lista de mascotas
      props.history.push("/mascotas");
      // imprimiendo un error en ESA página
      // NOTA: si REACT no fuera una SinglePageApplication, sweetalert no se podría
      // visualizar en la página /mascotas, 
      Swal.fire({
        title: "Mascota no encontrada",
        icon: "error",
        position: "top-end",
        timer: 1500,
        showConfirmButton: false
      })
    }
  }

  useEffect(() => {
    traerMascotaPorId();
  }, []);


  return (
    <main className="container">
      <div className="row mt-3">
        <div className="col-12">
          {
            cargando ? <Cargando /> :
              <div className="card shadow">
                <div className="card-body">
                  <h2>
                    <span className="display-3 mr-3">Mascota:</span>
                    <span className="display-4 text-danger">{objMascota.mascota_nombre}</span>
                  </h2>
                  <hr />
                  <p className="mr-2"> <strong> Tipo:</strong> <span>{objMascota.objTipo.tipo_nombre}</span></p>
                  <p className="mr-2"> <strong> Raza:</strong> <span>{objMascota.objRaza.raza_nombre}</span></p>
                  <p className="mr-2"> <strong> Edad:</strong> <span>{objMascota.mascota_edad} años.</span></p>
                  <p className="mr-2"> <strong> Colores:</strong> <span>{objMascota.mascota_colores}</span></p>
                  <p className="mr-2">
                    <strong> Estado:</strong>
                    {
                      objMascota.mascota_activo ?
                        <span className="badge badge-success">Activo</span> :
                        <span className="badge badge-danger">Inactivo</span>
                    }

                  </p>
                </div>
              </div>
          }

        </div>
      </div>
    </main>
  )
}

export default MascotaVer

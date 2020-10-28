import React from 'react'
import { MDBDataTable } from "mdbreact";
import { deleteMascotaById } from './services/mascota';
import Swal from 'sweetalert2';
const MascotasTabla = ({ mascotas, traerMascotas }) => {



  const eliminarMascotaPorId = (id) => {
    Swal.fire({
      title: "¿Eliminar?",
      icon: "error",
      text: "Los cambios serán irreversibles",
      showCancelButton: true
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        deleteMascotaById(id).then((data) => {
          // si la data tiene un atributo mascota_id, sí se ha eliminado
          if (data.mascota_id) {
            traerMascotas();
            Swal.fire({
              title: "Eliminado!",
              text: "Registro eliminado satisfactoriamente",
              timer: 1500,
              icon: "success"
            });
          }
        })
      }
    })


  }


  const data = {
    columns: [
      {
        // Texto del th
        label: "Id",
        // nombre del campo del objeto que debe coincidir
        // en las rows
        field: "mascota_id"
      },
      { label: "Nombre", field: "mascota_nombre" },
      { label: "Raza", field: "mascota_raza" },
      { label: "Colores", field: "mascota_colores" },
      { label: "Tipo", field: "mascota_tipo" },
      { label: "Edad", field: "mascota_edad" },
      { label: "Acciones", field: "acciones" }
    ],
    rows: mascotas.map(m => {
      return {
        ...m,
        acciones: (<>
          <button className="btn btn-secondary mr-2">Editar</button>
          <button className="btn btn-danger" onClick={() => {
            eliminarMascotaPorId(m.mascota_id);
          }}>Eliminar</button>
        </>)
      }
    })
  }

  return (
    <div className="row mt-4">
      <div className="col-12">
        <div className="card shadow">
          <div className="card-body">
            <MDBDataTable
              className="text-center"
              responsive
              striped
              bordered
              hover
              data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MascotasTabla

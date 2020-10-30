import React, { useEffect } from 'react'
import { MDBDataTable } from "mdbreact";
import { deleteMascotaById, putMascota } from './services/mascota';
import Swal from 'sweetalert2';
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useState } from 'react';

const MascotasTabla = ({ mascotas, setMascotas, traerMascotas, setMascotaEditar }) => {



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
            setMascotas([]);
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
  const handleChangeToggle = (estado, objMascota) => {
    putMascota({
      ...objMascota,
      mascota_activo: estado
    }).then(rpta => {

      // actualizar el estado mascotas del componente Mascotas.js con las mascota
      // que acaba de modificar su valor (campo: mascota_activo)

      if (rpta.status === 200) {

        let nuevasMascotas = mascotas.map((m) => {
          if (m.mascota_id === objMascota.mascota_id) {
            console.log("cambiando estado");
            m.mascota_activo = estado;
          }
          return m;
        })

        setMascotas(nuevasMascotas)

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registro actualizado",
          showConfirmButton: false,
          timer: 1000
        });
      }
    })

  }

  let data = {
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
      { label: "Activo", field: "mascota_activo" },
      { label: "Acciones", field: "acciones" }
    ],
    rows: mascotas.map(m => {
      return {
        ...m,
        mascota_activo: <Toggle defaultChecked={m.mascota_activo}
          onChange={(e) => {
            handleChangeToggle(e.target.checked, { ...m });
          }} />,
        acciones: (<>
          <button className="btn btn-secondary mr-2" onClick={() => {
            setMascotaEditar({ ...m });
          }}>Editar</button>
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

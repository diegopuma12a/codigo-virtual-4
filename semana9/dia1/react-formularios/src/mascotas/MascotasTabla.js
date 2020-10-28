import React from 'react'

const MascotasTabla = ({ mascotas }) => {

  return (
    <div className="row mt-4">
      <div className="col-12">
        <div className="card shadow">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Colores</th>
                    <th>Raza</th>
                    <th>Tipo</th>
                    <th>Edad</th>
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
                        <td>{m.mascota_raza}</td>
                        <td>{m.mascota_tipo}</td>
                        <td>{m.mascota_edad}</td>
                        <td>{m.mascota_activo.toString()}</td>
                        <td>
                          <button className="btn btn-secondary mr-2">Editar</button>
                          <button className="btn btn-danger">Eliminarsh</button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MascotasTabla

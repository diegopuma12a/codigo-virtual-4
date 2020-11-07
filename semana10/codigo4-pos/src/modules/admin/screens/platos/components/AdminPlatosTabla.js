import React, { useEffect, useState } from 'react'
import { getPlatos } from '../../../../../services/platosService';

const AdminPlatosTabla = ({ platos }) => {

  return (
    <div className="row">
      <div className="col">
        <div className="card shadow">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Imagen Plato</th>
                    <th>Categoria</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    platos.map(plato => (
                      <tr key={plato.plato_id}>
                        <td>{plato.plato_id}</td>
                        <td>{plato.plato_nom}</td>
                        <td>{plato.plato_pre}</td>
                        <td>
                          <img src={plato.plato_img} alt="imagen del plato" width="150" />
                        </td>
                        <td>
                          {plato.Categorium.categoria_nom}
                        </td>
                        <td>Acciones</td>
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

export default AdminPlatosTabla

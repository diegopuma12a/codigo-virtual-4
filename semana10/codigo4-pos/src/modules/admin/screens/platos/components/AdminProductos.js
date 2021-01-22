import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';
import { getCategorias } from '../../../../../services/categoriasService';
import { postImagenByPlatoId, postPlatoSinImagen } from '../../../../../services/platosService';

const formularioVacio = {
  plato_nom: "",
  plato_pre: 0,
  categoria_id: 0
}

const AdminPlatosForm = ({ traerPlatos }) => {

  const [formulario, setFormulario] = useState(formularioVacio);
  const [categorias, setCategorias] = useState([]);

  // archivoRef será una variable que puede ser uasada para tomar un elemento del DOM
  // es decir, vincular un elemento del DOM con una variable(como un getElementById)
  // NOTA: el elemento vinculado del DOM se encontrará en el objeto:
  // archivoRef.current
  const archivoRef = useRef();

  const traerCategorias = async () => {
    const data = await getCategorias();
    if (data.ok) {
      setCategorias(data.content);
    }
  }

  useEffect(() => {
    traerCategorias();
  }, []);

  const handleChange = e => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = e => {
    e.preventDefault();

    Swal.fire({
      title: "Espere...",
      text: "Estamos subiendo la información al servidor",
      icon: "info",
      showConfirmButton: false,
      // deniega el derecho de hacer click fuera del cuadro de Sweetalert
      // En este caso, la única forma de cerrar éste sweetalert
      // será lanzando otro sweetalert que sí se pueda cancelar o cerrar
      allowOutsideClick: false
    })

    const objPlato = {
      ...formulario,
      plato_img: ""
    };

    postPlatoSinImagen(objPlato).then(data => {
      if (data.ok) {

        const plato_id = data.content.plato_id;

        postImagenByPlatoId(plato_id, archivoRef.current.files[0])
          .then(rpta => {
            if (rpta.ok) {
              traerPlatos();
              setFormulario(formularioVacio);
              // quitar la imagen del input file
              archivoRef.current.value = "";
              Swal.fire({
                title: "Hecho!",
                icon: "success",
                text: "El plato y su imagen fueron creados con éxito",
                timer: 1500,
                showConfirmButton: false
              });
            }
          })

      }
    })

  }

  return (
    <div className="row mb-4">
      <div className="col">
        <div className="card shadow">
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="">Nombre del Plato</label>
                <input type="text" placeholder="Ejm: Cebiche"
                  className="form-control" name="plato_nom"
                  value={formulario.plato_nom}
                  onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="">Precio del Plato:</label>
                <input type="number" className="form-control"
                  value={formulario.plato_pre} onChange={handleChange}
                  name="plato_pre" />
              </div>
              <div className="form-group">
                <label htmlFor="">Seleccione Categoría</label>
                <select name="categoria_id" className="form-control"
                  value={formulario.categoria_id} onChange={handleChange}>
                  <option value="0">--Seleccione Categoría--</option>
                  {
                    categorias.map(categoria => {
                      return (
                        <option value={categoria.categoria_id}
                          key={categoria.categoria_id}>
                          {categoria.categoria_nom}
                        </option>
                      )
                    })
                  }
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="">Imagen del plato:</label>
                {/* ref es una propiedad de todo elemento del DOM de REACT para 
                relacionar una variable creada con useRef() para su manipulación*/}
                <input type="file" className="form-control" ref={archivoRef} />
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Crear Plato
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPlatosForm

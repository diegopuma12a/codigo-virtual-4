import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2";
import { postMascota, putMascota } from './services/mascota';

const formularioVacio = {
  mascota_nombre: "",
  mascota_raza: 0,
  mascota_tipo: 0,
  mascota_edad: 0,
  mascota_colores: "",
  mascota_activo: false
}

const MascotasForm = ({ traerMascotas, mascotaEditar }) => {

  const [formulario, setFormulario] = useState(formularioVacio);
  const [modo, setModo] = useState("crear");

  const handleChange = (e) => {
    let valor = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormulario({
      ...formulario,
      [e.target.name]: valor
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modo === "crear") {
      Swal.fire({
        title: "¿Registrar mascota?",
        text: "Se guardará en la base de datos",
        icon: "question",
        showCancelButton: true
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          // crear el registro de la mascota
          postMascota(formulario).then(data => {
            if (data.mascota_id) {
              traerMascotas();
              setFormulario(formularioVacio);
              Swal.fire({
                title: "Registrado!",
                text: "Mascota registrada correctamente",
                icon: "success",
                timer: 1500
              });
            }
          })
        }
      })
    } else {
      // asumimos que estamos en el modo editar
      Swal.fire({
        title: "¿Editar?",
        text: "¿Seguro que desea editar el registro de la mascota?",
        icon: "question",
        showCancelButton: true
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          putMascota({ ...formulario }).then((respuesta) => {
            if (respuesta.status === 200) {

              setFormulario(formularioVacio);
              setModo("crear");
              traerMascotas();

              Swal.fire({
                position: "top-end",
                timer: 1000,
                title: "Registro actualizado!",
                icon: "success",
                showConfirmButton: false,
              });
            }
          })
        }
      })
    }
  }

  // useEffect(() => {
  //   console.log("use effect vacío");
  // }, []);

  // useEffect(() => {
  //   console.log("Use effect cuando cambia el formulario");
  // }, [formulario])

  useEffect(() => {
    console.log("Use effect cuando cambia la mascotaEditar");
    if (mascotaEditar !== null) {
      setFormulario(mascotaEditar);
      setModo("editar");
    }
  }, [mascotaEditar]);

  return (
    <div className="row mt-4">
      <div className="col-12">
        <div className="card shadow">
          <div className="card-body">
            <form className="row" onSubmit={handleSubmit}>
              <div className="form-group col-md-6">
                <label htmlFor="">Nombre:</label>
                <input type="text"
                  className="form-control"
                  placeholder="Ingrese nombre"
                  name="mascota_nombre"
                  onChange={handleChange}
                  value={formulario.mascota_nombre}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Raza:</label>
                <select className="form-control"
                  name="mascota_raza"
                  value={formulario.mascota_raza}
                  onChange={handleChange}>
                  <option value="0">Seleccione</option>
                  <option value="1">Bull Terrier</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Colores:</label>
                <input type="text"
                  className="form-control"
                  name="mascota_colores"
                  onChange={handleChange}
                  value={formulario.mascota_colores}
                  placeholder="Ingrese colores" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Edad</label>
                <input type="number"
                  name="mascota_edad"
                  value={formulario.mascota_edad}
                  onChange={handleChange}
                  className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Tipo</label>
                <select className="form-control"
                  value={formulario.mascota_tipo}
                  name="mascota_tipo"
                  onChange={handleChange}>
                  <option value="0">Seleccione</option>
                  <option value="1">Perro</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">¿Registro activo?</label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input
                        type="checkbox"
                        // checked, es el campo análogo a value
                        // y sólo acepta valores booleanos (true/false)
                        checked={formulario.mascota_activo}
                        name="mascota_activo"
                        onChange={handleChange}
                        aria-label="Checkbox for following text input"
                        id="checkActivo" />
                    </div>
                  </div>
                  <label htmlFor="checkActivo" className="form-control" >Activo</label>
                </div>
              </div>
              <div className="form-group col-md-6">
                <button className="btn btn-block btn-primary"
                  type="submit">
                  {modo === "crear" ? "Crear Mascota" : "Guardar Cambios"}

                </button>
              </div>
              <div className="form-group col-md-6">
                <button className="btn btn-block btn-danger"
                  type="button">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MascotasForm

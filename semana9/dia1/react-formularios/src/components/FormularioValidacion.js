import React, { useState } from 'react'
import Swal from "sweetalert2";
import Alert from './Alert';

const FormularioValidacion = () => {

  const [formulario, setFormulario] = useState(
    {
      nombre: "",
      apellido: "",
      fecha: "2020-10-10"
    }
  );

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    let campo = e.target.name;
    setFormulario(
      {
        ...formulario,
        [campo]: e.target.value
      }
    );
  }
  const submit = (e) => {
    e.preventDefault();

    /**validar formulario */
    if (formulario.nombre.trim() === "" ||
      formulario.apellido.trim() === "" ||
      formulario.fecha.trim() === "") {
      setError(true);
      return;
    }

    Swal.fire({
      title: "Creado!",
      text: "Usuario creado correctamente",
      icon: "success",
      timer: 2000
    });

    // limpiar el formulario
    setFormulario({
      nombre: "",
      apellido: "",
      fecha: "2020-26-10"
    });
    // quitamos el error
    setError(false);

  }
  return (
    <div className="row">
      <div className="col-12">
        {
          error === true ? <Alert tipo={"danger"}
            texto={"Todos los campos deben ser llenados correctamente"} /> : null
        }
        <div className={error === true ? "card shadow border-danger" : "card shadow"}>
          <div className="card-body">
            <form onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="">Nombre:</label>
                <input type="text"
                  className="form-control"
                  placeholder="Ingrese su nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="">Apellido:</label>
                <input type="text"
                  name="apellido"
                  className="form-control"
                  placeholder="Ingrese su apellido"
                  value={formulario.apellido}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Fecha de Nacimiento:</label>
                <input type="date"
                  className="form-control"
                  name="fecha"
                  value={formulario.fecha}
                  onChange={handleChange} />
              </div>
              <div className="form-group">
                <button className="btn btn-dark"
                  type="submit">Crear Usuario</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormularioValidacion

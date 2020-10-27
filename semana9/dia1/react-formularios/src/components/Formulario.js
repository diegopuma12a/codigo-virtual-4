import React, { useState } from 'react'
import Swal from "sweetalert2";

const Formulario = () => {

  const [formulario, setFormulario] = useState(
    {
      nombre: "",
      apellido: "",
      fecha: "2020-10-10"
    }
  );
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
    console.log("Enviando formulario...");
    console.log(formulario);
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
  }
  return (
    <div className="row">
      <div className="col-12">
        <div className="card shadow">
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

export default Formulario

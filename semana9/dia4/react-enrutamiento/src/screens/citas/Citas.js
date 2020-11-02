import React, { useState } from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Citas.css";

import { Modal, Button } from "react-bootstrap";
import { useEffect } from 'react';
import { getMascotas } from '../../services/mascotas';
import { postCita } from '../../services/citas';


const localizer = momentLocalizer(moment)

const eventos = [
  {
    id: 1,
    title: "Cita con gato Félix",
    start: new Date(2020, 9, 30, 10, 0, 0),
    end: new Date(2020, 9, 30, 10, 30, 0),
    desc: "Corte de uñas del gatito"
  },
  {
    id: 2,
    title: "Cita con perro Chancho",
    start: new Date(2020, 9, 30, 16, 0, 0),
    end: new Date(2020, 9, 30, 16, 30, 0),
    desc: "Vacuna 3 - Quintuple"
  }
]

const formularioVacio = {
  mascota_id: 0,
  cita_detalle: "",
  cita_fecha: "",
  cita_hora: "",
  cita_fecha_unix: ""
};

const Citas = (props) => {

  const [show, setShow] = useState(false);
  const [formulario, setFormulario] = useState(formularioVacio)
  const [mascotas, setMascotas] = useState([]);

  const handleClose = () => setShow(false);



  const eventoSeleccionado = (e) => {
    console.log(e);
  }

  const slotSeleccionado = (e) => {


    let horaString = moment(e.start).format("LT");
    let fechaString = moment(e.start).format("YYYY-MM-DD");


    setFormulario({
      ...formulario,
      cita_fecha: fechaString,
      cita_hora: horaString,
      cita_fecha_unix: moment(e.start).unix(),
    })

    setShow(true);
  }

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const obtenerMascotas = async () => {
    getMascotas().then(data => {
      setMascotas(data);
    })
  }
  useEffect(() => {
    obtenerMascotas();
  }, []);

  const crearCita = (e) => {
    e.preventDefault();
    const objCita = {
      cita_fecha: formulario.cita_fecha_unix,
      cita_estado: true,
      cita_detalle: formulario.cita_detalle,
      mascota_id: formulario.mascota_id
    }
    postCita(objCita).then(data => {
      if (data.cita_id) {
        setShow(false);
        setFormulario(formularioVacio);
      }
    });
  }

  return (
    <main className="container">
      <div className="row">
        <div className="col-12">
          <div className="card calendario">
            <div className="card-body">
              <Calendar
                selectable
                localizer={localizer}
                events={eventos}
                startAccessor="start"
                endAccessor="end"
                onSelectEvent={eventoSeleccionado}
                onSelectSlot={slotSeleccionado}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form onSubmit={crearCita}>
            <div className="form-group">
              <label htmlFor="">Fecha de Cita:</label>
              <input type="date" disabled className="form-control"
                name="cita_fecha" value={formulario.cita_fecha} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="">Hora de Cita:</label>
              <input type="text" disabled className="form-control"
                name="cita_hora" value={formulario.cita_hora} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="">Seleccione Mascota:</label>
              <select name="" id="" className="form-control"
                name="mascota_id" value={formulario.mascota_id} onChange={handleChange} >

                {
                  mascotas.map(m => (
                    <option value={m.mascota_id}>
                      {`${m.mascota_nombre}`}
                    </option>
                  ))
                }

              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Detalles de la cita:</label>
              <textarea name="" className="form-control"
                cols="30" rows="3"
                placeholder="Ingrese más detalles"
                name="cita_detalle" value={formulario.cita_detalle} onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-danger" type="submit" onClick={handleClose}>
                Cancelar
              </button>
              <button className="btn btn-primary ml-4" type="submit">
                Crear Cita
            </button>
            </div>
          </form>

        </Modal.Body>
      </Modal>
    </main>
  )
}

export default Citas

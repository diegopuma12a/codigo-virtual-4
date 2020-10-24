import React from 'react'

const Cargando = () => {
  return (
    <div className="alert alert-primary" role="alert">
      <h4 className="alert-heading">Cargando...</h4>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <p className="mb-0"></p>
    </div>
  )
}

export default Cargando

import React from 'react'

const Cargando = () => {
  return (
    <div className="alert alert-info text-center" role="alert">
      <h4 className="alert-heading">Cargando....</h4>
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Cargando

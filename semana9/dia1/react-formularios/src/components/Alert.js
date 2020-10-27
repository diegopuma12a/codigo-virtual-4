import React from 'react'

const Alert = ({ tipo, texto }) => {

  return (
    <div className={`alert alert-${tipo}`} role="alert">
      <strong>{texto}</strong>
    </div>
  )
}

export default Alert

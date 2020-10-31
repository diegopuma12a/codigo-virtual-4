import React from 'react'
import MascotasTabla from './components/MascotasTabla'

const Mascotas = () => {
  return (
    <main className="container">
      <h1 className="display-4 text-danger mt-3"> Mascotas </h1>
      <hr />
      <MascotasTabla x={6} />
    </main>
  )
}

export default Mascotas

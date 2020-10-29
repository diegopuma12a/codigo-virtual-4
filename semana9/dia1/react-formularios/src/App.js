import React from 'react'
import Header from './components/Header'
import Mascotas from './mascotas/Mascotas'

const App = () => {
  return (
    <>
      <Header />
      <main className="container mt-4">
        <Mascotas />
      </main>
    </>
  )
}

export default App

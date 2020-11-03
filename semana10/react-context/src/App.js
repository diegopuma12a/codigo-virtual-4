import React from 'react'
import Formulario from './components/Formulario'
import ContadorState from './context/contador/contadorState'

const App = () => {
  return (
    <ContadorState>

      <Formulario />
      
    </ContadorState>
  )
}

export default App

import React, { useContext } from 'react'
import ContadorContext from '../context/contador/contadorContext';
import Boton from './Boton';

const Formulario = () => {

  // Consumir una variable de estado global
  // ?? estamos creando una variable que represente al contexto del contador
  const localContadorContext = useContext(ContadorContext);
  console.log(localContadorContext);

  return (
    <div>
      Componente Formulario
      <strong>Cuenta:</strong>{localContadorContext.cuenta}
      <hr />
      <Boton />
    </div>
  )
}

export default Formulario

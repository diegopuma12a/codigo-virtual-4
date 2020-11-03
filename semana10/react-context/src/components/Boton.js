import React, { useContext } from 'react'
import ContadorContext from '../context/contador/contadorContext';

const Boton = () => {

  const localContadorContext = useContext(ContadorContext);
  
  return (
    <button onClick={()=>{
      localContadorContext.sumar();
    }}>
      Click Sumar "contador = {localContadorContext.cuenta}"
    </button>
  )
}

export default Boton

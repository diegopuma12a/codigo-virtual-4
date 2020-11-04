import React from 'react'
import MesaContext from './mesaContext'

const MesaState = (props) => {


  return (
    <MesaContext.Provider value={{
      a: 80,
      fecha: "2020-3-11"
    }}>
      {props.children}
    </MesaContext.Provider>
  )
}

export default MesaState

import React, { useReducer } from 'react'
import MesaContext from './mesaContext'
import MesaReducer from './mesaReducer';

const MesaState = (props) => {

  const [state, dispatch] = useReducer(MesaReducer, {
    globalObjMesa: null,
    globalObjCategoria: null
  });

  const seleccionarMesaGlobal = (objMesa) => {
    dispatch({
      type: "SELECCIONAR_MESA",
      data: { ...objMesa }
    });
  }

  const seleccionarCategoriaGlobal = (objCategoria) => {
    dispatch({
      type: "SELECCIONAR_CATEGORIA",
      data: { ...objCategoria }
    })
  }

  return (
    <MesaContext.Provider value={{
      globalObjMesa: state.globalObjMesa,
      globalObjCategoria: state.globalObjCategoria,
      seleccionarMesaGlobal,
      seleccionarCategoriaGlobal
    }}>
      {props.children}
    </MesaContext.Provider>
  )
}

export default MesaState

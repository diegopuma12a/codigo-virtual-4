import React, { useReducer } from 'react'
import MesaContext from './mesaContext'
import MesaReducer from './mesaReducer';

const MesaState = (props) => {

  const [state, dispatch] = useReducer(MesaReducer, {
    globalObjMesa: null,
    globalObjCategoria: null,
    globalPedidos: []
  });

  // función que se ejecutará con el botón de "+1"
  // de cualquier plato
  const agregarPlato = (objPlato) => {

    const { globalObjMesa, globalPedidos } = state;
    // Verificar que tenemos una mesa seleccionada globalmente
    if (globalObjMesa === null) return;

    // obtener el pedido actual que pertence a la mesa global seleccionada
    // en el arreglo global pedidos
    const pedidoActual =
      globalPedidos.find(objPedido => objPedido.mesa_id === globalObjMesa.mesa_id);

    // preguntamos si el pedidoActual existe, es decir, que la mesa gobal seleccionada
    // tenga un pedido previamente en nuestro arreglo "globalPedidos"
    if (pedidoActual) {
      // La mesa global seleccionada, ya tenia un pedido 


    } else {
      // La mesa global seleccionada, no tenía un pedido, estaba vacía
      // por ende, debemos crear el pedido nuevo en el arreglo global de pedidos
      // con la mesa global seleccionada, y el plato "objPlato" con cantidad = 1
      const nuevoGlobalPedidos = [
        ...globalPedidos,
        {
          total: objPlato.plato_pre,
          mesa_id: globalObjMesa.mesa_id,
          platos: [
            {
              ...objPlato,
              plato_cant: 1
            }
          ]
        }
      ];
      dispatch({
        type: "ACTUALIZAR_GLOBAL_PEDIDOS",
        data: nuevoGlobalPedidos
      });
    }



  }
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
      globalPedidos: state.globalPedidos,
      seleccionarMesaGlobal,
      seleccionarCategoriaGlobal,
      agregarPlato
    }}>
      {props.children}
    </MesaContext.Provider>
  )
}

export default MesaState

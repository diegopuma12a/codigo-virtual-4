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

      // vamos a verificar si la mesa seleccionada ya tenía el plato que estamos
      // recibiendo por parámetros

      const platoExistente = pedidoActual.platos.find(plato => plato.plato_id === objPlato.plato_id);
      if (platoExistente) {
        // el plato que quiero aumentar ya existía en el pedido de la mesa actual
        const nuevoGlobalPedidos = globalPedidos.map(pedido => {
          if (pedido.mesa_id === globalObjMesa.mesa_id) {
            pedido.platos.map(plato => {
              if (plato.plato_id === objPlato.plato_id) {
                plato.plato_cant++;
              }
              return plato;
            })
          }
          return pedido;
        })

        dispatch({
          type: "ACTUALIZAR_GLOBAL_PEDIDOS",
          data: nuevoGlobalPedidos
        })


      } else {
        // la mesa tenía pedidos, pero no tenía ninguna unidad del plato que quiero agregar
        // 1. mapeando el arreglo global de pedidos
        const nuevoGlobalPedidos = globalPedidos.map(pedido => {
          //2. cuando encuentre el pedido de la mesa actual seleccionada
          if (pedido.mesa_id === globalObjMesa.mesa_id) {
            //3. cuando encuentro el pedido de la mesa seleccionada, a su arreglo de platos,
            // le agrego el nuevo plato con una unidad
            pedido.platos.push({
              ...objPlato,
              plato_cant: 1
            });
          }
          return pedido;
        })
        dispatch({
          type: "ACTUALIZAR_GLOBAL_PEDIDOS",
          data: nuevoGlobalPedidos
        })
      }



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

  const restarPlato = (objPlato) => {

    let { globalPedidos, globalObjMesa } = state;
    if (globalObjMesa === null) return;

    // buscamos un pedido que corresponda a la mesa seleccionada global
    let pedidoActual = globalPedidos.find(pedido => pedido.mesa_id === globalObjMesa.mesa_id);
    if (pedidoActual) {
      // significa que sí existe un pedido para la mesa actual
      // Ahora, verificamos si el plato que estoy restando, existe en el arreglo de platos
      // del pedido actual.
      pedidoActual.platos = pedidoActual.platos.filter(plato => {
        if (plato.plato_id === objPlato.plato_id) {
          // significa que encontré el plato que estoy tratando de restar
          // Ahora, analizaremos si el plato, sólo tenía un ítem o tenía más items
          if (plato.plato_cant === 1) {
            // Cuando estamos dentro del método filter(),
            // retornar undefined, es como no retornar el elemento , es decir, 
            // dejamos de retornar el plato de la lista de platos.
            return undefined;
          } else {
            plato.plato_cant--;
            return plato;
          }
        }
        return plato;
      })

      // luego de descontar un plato, cabe la posibilidad de que el arreglo de platos del
      // pedido actual de la mesa seleccionada ya no tenga elementos (platos)...
      // de ser caso, con la siguiente instrucción, eliminamos a ese pedido 
      // del arreglo global de pedidos para evitar que la mesa tenga un petido con 0 platos.
      if (pedidoActual.platos.length === 0) {
        globalPedidos = globalPedidos.filter(pedido => pedido.mesa_id !== globalObjMesa.mesa_id)
      }

      dispatch({
        type: "ACTUALIZAR_GLOBAL_PEDIDOS",
        data: globalPedidos
      })

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
      agregarPlato,
      restarPlato
    }}>
      {props.children}
    </MesaContext.Provider>
  )
}

export default MesaState

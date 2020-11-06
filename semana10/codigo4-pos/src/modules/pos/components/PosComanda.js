import React, { useContext } from 'react'
import MesaContext from '../context/mesa/mesaContext';
import PosComandaItem from './PosComandaItem'

const PosComanda = () => {

  const { globalPedidos, globalObjMesa } = useContext(MesaContext);

  let pedidoActual;

  if (globalObjMesa) {
    pedidoActual = globalPedidos.find(pedido => pedido.mesa_id === globalObjMesa.mesa_id);
  }
  return (
    <div className="comanda">
      <h4 className="comanda__mesa">Mesa 01</h4>
      <p className="comanda__usuario">Carlos Jimenez</p>
      <hr />

      <ul className="comanda__lista">
        {
          globalObjMesa ?
            pedidoActual ?
              pedidoActual.platos.map(plato => {
                return <PosComandaItem key={plato.plato_id} plato={plato} />
              })
              :
              <span>Esta mesa no tiene pedidos</span>
            :
            <span>No se ha seleccionado ninguna mesa 🙄</span>
        }
      </ul>
      <button className="boton boton-success boton-block">PAGAR</button>
    </div>
  )
}

export default PosComanda

import React, { useContext, useEffect, useState } from 'react'
import { getPlatosByCategoriaId } from '../../../services/categoriasService';
import PosPlato from './PosPlato'
import MesaContext from "./../context/mesa/mesaContext";

const PosPlatos = () => {

  const [platos, setPlatos] = useState([]);
  const { globalObjCategoria } = useContext(MesaContext);

  const traerPlatosPorCategoriaId = async (categoria_id) => {
    const data = await getPlatosByCategoriaId(categoria_id);
    setPlatos(data.content.Platos);
  }

  useEffect(() => {
    if (globalObjCategoria !== null) {
      traerPlatosPorCategoriaId(globalObjCategoria.categoria_id)
    }
  }, [globalObjCategoria])

  return (
    <div className="carta__platos">
      {
        platos.map(objPlato => {
          return <PosPlato key={objPlato.plato_id} objPlato={objPlato} />
        })
      }
    </div>
  )
}

export default PosPlatos

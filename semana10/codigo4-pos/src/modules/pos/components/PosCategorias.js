import React, { useContext, useEffect, useState } from 'react'
import { getCategorias } from '../../../services/categoriasService';
import MesaContext from '../context/mesa/mesaContext';

const PosCategorias = () => {


  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);

  const {
    globalObjCategoria,
    seleccionarCategoriaGlobal
  } = useContext(MesaContext);

  const traerCategorias = async () => {
    const data = await getCategorias();
    if (data.ok) {
      setCategorias(data.content);
      setCargando(false);
    }
  }
  useEffect(() => {
    traerCategorias();
  }, [])

  return (
    <div className="carta__categorias">
      {
        cargando ? <span>Cargando...</span> :
          categorias.map(objCategoria => (
            <button key={objCategoria.categoria_id}
              className={`boton boton-outline-primary 
                ${globalObjCategoria?.categoria_id === objCategoria.categoria_id ? "activo" : ""}`}

              onClick={() => {
                seleccionarCategoriaGlobal({ ...objCategoria })
              }}>
              {objCategoria.categoria_nom}
            </button>
          ))
      }
    </div>
  )
}

export default PosCategorias

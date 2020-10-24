import React, { useEffect, useState } from 'react'
import { URL_BACKEND } from './../environments/environments';

const Tipos = () => {

  const [types, setTypes] = useState([]);

  const getTipos = async () => {
    const peticion = await fetch(`${URL_BACKEND}/type`);
    const data = await peticion.json();
    setTypes(data.results);
  }

  useEffect(() => {
    getTipos();
  }, []);


  return (
    <aside className="col-md-2 tipos">
      {
        types.map((tipo) => {
          return (
            <div className="tipos__tipo text-center mb-2 px-3 py-3" key={tipo.name}>
              {tipo.name}
            </div>
          )
        })
      }
    </aside>
  )
}

export default Tipos

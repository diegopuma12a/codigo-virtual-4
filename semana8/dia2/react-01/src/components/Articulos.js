import React from 'react'
import Articulo from "./Articulo"

const Articulos = ({blog = []}) => {

  return (
    <div>
      <h3>También te puede interesar...</h3>
      {
        blog.map((art)=> (<Articulo key={art.id} art={art}/>) )
      }
    </div>
  )
}

export default Articulos

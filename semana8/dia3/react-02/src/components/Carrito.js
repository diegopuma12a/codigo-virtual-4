import React from 'react'

const Carrito = ({ canasta }) => {

  return (
    <div className="carrito">
      <h3>Carrito de Compras</h3>
      <hr />
      <ul className="carrito__lista">
        {
          canasta.map((prod) => {
            return <li key={prod.id}>
              <strong>{prod.nombre}</strong> -
                      <small> S/ {prod.precio}</small>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Carrito

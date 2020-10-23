import React from 'react'

const Carrito = ({ canasta, eliminarProducto }) => {

  let total = 0;

  canasta.forEach(p => {
    total += p.precio * p.cantidad
  });

  return (
    <div className="carrito">
      <h3>Carrito de Compras</h3>
      <hr />
      <ul className="carrito__lista">
        {
          canasta.map((prod) => {
            return (
              <li key={prod.id}>
                <strong>{prod.nombre}</strong> -
                <small> S/ {prod.precio}</small> -
                <strong> {prod.cantidad} unidades</strong>
                <button className="btn-eliminar"
                  onClick={() => {
                    eliminarProducto(prod.id);
                  }} >
                  X
                </button>
              </li>)
          })
        }
      </ul>
      <h5 style={
        {
          textAlign: "end",
          marginTop: "1rem"
        }
      }>TOTAL: S/ {total.toFixed(2)}</h5>
    </div>
  )
}

export default Carrito

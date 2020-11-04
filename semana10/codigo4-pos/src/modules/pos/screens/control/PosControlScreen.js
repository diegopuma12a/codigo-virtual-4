import React from 'react'
import PosCategorias from '../../components/PosCategorias'
import PosComanda from '../../components/PosComanda'
import PosHeader from '../../components/PosHeader'
import PosMesas from '../../components/PosMesas'
import PosNavigation from '../../components/PosNavigation'
import PosPlatos from '../../components/PosPlatos'

const PosControlScreen = () => {
  return (
    <>
      <PosHeader />
      <main className="pos-container">
        <PosNavigation />
        <section className="tabla">
          <PosMesas />
          <div className="pedido">
            <div className="carta">
              <PosCategorias />
              <PosPlatos />
            </div>
            <div className="boleta">
              <h3>Pedido</h3>
              <PosComanda />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default PosControlScreen

import React from 'react'
import PosMesa from './PosMesa'

const PosMesas = () => {
  return (
    <div className="mesas">
      <ul className="mesas__lista">
        <PosMesa />
        <PosMesa />
        <PosMesa />
        <PosMesa />
        <PosMesa />
        <PosMesa />
      </ul>
      <div className="mesas__info"></div>
    </div>
  )
}

export default PosMesas

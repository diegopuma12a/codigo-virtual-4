import React from 'react'
import platoSVG from "./../../../assets/img/plato_blanco.svg";
const PosNavigation = () => {
  return (
    <nav className="menu">
      <ul className="menu__lista">
        <li>
          <img src={platoSVG} alt="" />
          <span>Bebidas</span>
        </li>
        <li>
          <img src={platoSVG} alt="" />
          <span>Bebidas</span>
        </li>
        <li>
          <img src={platoSVG} alt="" />
          <span>Bebidas</span>
        </li>
        <li>
          <img src={platoSVG} alt="" />
          <span>Bebidas</span>
        </li>
      </ul>
    </nav>
  )
}

export default PosNavigation

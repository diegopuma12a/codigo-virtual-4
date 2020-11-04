import React from 'react'

import logoSVG from "./../../../assets/img/logo.svg";
import searchSVG from "./../../../assets/img/search.svg";

const PosHeader = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logoSVG} alt="" />
      </div>
      <div className="header__buscador">
        <img src={searchSVG} alt="" />
        <input type="text" className="header__input" placeholder="Busca un término" />
      </div>
      <div className="header__usuario">
        <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="" />
        <span>Jorge Garnica</span>
      </div>
    </header>
  )
}

export default PosHeader

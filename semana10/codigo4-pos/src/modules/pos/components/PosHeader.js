import React, { useContext } from 'react'
import AuthContext from '../../auth/context/authContext';
import { withRouter } from "react-router-dom";
import logoSVG from "./../../../assets/img/logo.svg";
import searchSVG from "./../../../assets/img/search.svg";

const PosHeader = ({ history }) => {
  const { usu_nom, cerrarSesion } = useContext(AuthContext);
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
        <span>{usu_nom}</span>

        <button className="btn btn-outline-danger" onClick={() => {
          cerrarSesion();
          history.replace("/");
        }}>
          Cerrar Sesión
        </button>
      </div>
    </header>
  )
}

export default withRouter(PosHeader);

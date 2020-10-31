import React from 'react'
import { NavLink } from "react-router-dom";
import logo from "./../assets/logomascotas.png"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <img src={logo} alt="" height="50" />
      <a className="navbar-brand ml-4" href="!#">MascotApp</a>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {/* Link > COmponente que sirve para redireccionarnos a una ruta específica, es igual a la 
          etqueta <a></a> sin embargo, la lógica de react, usa LINK */}
          {/* NavLink > Componente con las mismas facultades que el componente Link, sin embargo
          tiene la propiedad activeClassName que sirve para colocar una clase en el link que esté 
          activo, dependiendo de la ruta en la que nos encontremos */}
          <li className="nav-item">
            <NavLink to={"/"} exact
              className="nav-link"
              activeClassName="active">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/mascotas"}
              className="nav-link"
              activeClassName="active">Mascotas</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/tipos"}
              className="nav-link"
              activeClassName="active">Tipos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/razas"}
              className="nav-link"
              activeClassName="active">Razas</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/citas"}
              className="nav-link"
              activeClassName="active">Citas</NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav >
  )
}

export default Header

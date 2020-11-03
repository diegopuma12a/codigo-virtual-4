import React from 'react'
import { Link, NavLink } from "react-router-dom";
const AdminHeader = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to={"/admin"}>ADMIN</Link>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link"
              to={"/admin"} activeClassName="active" exact>Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"
              to={"/admin/clientes"} activeClassName="active">Clientes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"
              to={"/admin/productos"} activeClassName="active">Productos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"
              to={"/admin/ventas"} activeClassName="active">Ventas</NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default AdminHeader

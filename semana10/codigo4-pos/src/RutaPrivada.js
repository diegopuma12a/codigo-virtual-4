import React, { useContext } from 'react'
import { Redirect, Route } from "react-router-dom";
import AuthContext from './modules/auth/context/authContext';

const RutaPrivada = ({ path, componente: Componente }) => {

  const { autenticado, cargando } = useContext(AuthContext);

  return (
    cargando ?
      <h1 className="display-4">
        Cargando...
      </h1> :
      autenticado ?
        <Route path={path} component={Componente} /> :
        <Redirect to={"/"} />
  )
}

export default RutaPrivada

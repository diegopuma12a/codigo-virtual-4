const AuthReducer = (stateActual, action) => {
  switch (action.type) {
    case "INICIAR_SESION":
      return {
        ...stateActual,
        usu_id: action.data.usu_id,
        usu_nom: action.data.usu_nom,
        token: action.data.token,
        autenticado: true,
        cargando: false
      }
    case "CERRAR_SESION":
      localStorage.removeItem("token");
      return {
        ...stateActual,
        usu_id: null,
        usu_nom: null,
        token: null,
        autenticado: false,
        cargando: false
      }
  }
}
export default AuthReducer;
import React, { useEffect, useReducer } from 'react'
import { verificarToken } from '../../../services/authService';
import AuthContext from './authContext'
import AuthReducer from './authReducer';

const AuthState = (props) => {

  const [state, dispatch] = useReducer(AuthReducer, {
    autenticado: false,
    usu_nom: null,
    usu_id: null,
    token: null,
    cargando: true
  });

  const iniciarSesionConLocalStorage = () => {

    const token = localStorage.getItem("token");
    if (token) {
      // verificar el token con el backend
      verificarToken(token).then(data => {
        if (data.ok) {
          const payload = token.split(".")[1];
          const payloadDesencriptado = window.atob(payload);
          const payloadJSON = JSON.parse(payloadDesencriptado);
          dispatch({
            type: "INICIAR_SESION",
            data: {
              ...payloadJSON,
              token: token
            }
          })
        }
        else {
          dispatch({
            type: "CERRAR_SESION",
          })
        }
      })

    } else {
      dispatch({
        type: "CERRAR_SESION"
      })
    }

  }
  useEffect(() => {
    iniciarSesionConLocalStorage();
  }, []);

  /**
   * Función que será llamada desde el formulario, luego de que el inicio de sesión
   * sea correcto,
   * ésta función recibirá el token y actualizará el estado global de la aplicación con 
   * la información del usuario
   */
  const iniciarSesion = (token) => {
    // la función split devuelve un arreglo de subcadenas dado el separador
    // ejm en el caso del token
    // 12323rwef.34234f4.asefe
    // resultado: ["12323rwef","34234f4","asefe"]
    const payload = token.split(".")[1];
    // vamos a desencriptar el payload que está en base-64
    // window.atob("cadenaencriptada") desencripta una cadena en base-64
    const payloadDesencriptado = window.atob(payload);
    const payloadJSON = JSON.parse(payloadDesencriptado);
    localStorage.setItem("token", token);
    dispatch({
      type: "INICIAR_SESION",
      data: {
        ...payloadJSON,
        token: token
      }
    });
  }

  const cerrarSesion = () => {
    dispatch({
      type: "CERRAR_SESION"
    })
  }


  return (
    <AuthContext.Provider value={{
      usu_nom: state.usu_nom,
      usu_id: state.usu_id,
      autenticado: state.autenticado,
      cargando: state.cargando,
      iniciarSesion: iniciarSesion,
      cerrarSesion: cerrarSesion
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
